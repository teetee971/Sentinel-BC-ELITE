// API Tool for listing resources
export interface ListResourcesParams {
  path?: string;
  cursor?: string | null;
  only_tools?: boolean;
}

export interface Resource {
  id: string;
  name: string;
  type: 'tool' | 'document' | 'template';
  path: string;
  description?: string;
  metadata?: Record<string, any>;
}

export interface ListResourcesResponse {
  resources: Resource[];
  next_cursor?: string | null;
}

export const api_tool = {
  async list_resources(params: ListResourcesParams): Promise<ListResourcesResponse> {
    const response = await fetch('/api/resources', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      throw new Error(`Failed to list resources: ${response.statusText}`);
    }

    return response.json();
  },
};
