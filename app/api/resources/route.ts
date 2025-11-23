import { NextRequest, NextResponse } from 'next/server';

// Types for resources
interface Resource {
  id: string;
  name: string;
  type: 'tool' | 'document' | 'template';
  path: string;
  description?: string;
  metadata?: Record<string, any>;
}

interface ListResourcesRequest {
  path?: string;
  cursor?: string | null;
  only_tools?: boolean;
}

interface ListResourcesResponse {
  resources: Resource[];
  next_cursor?: string | null;
}

// Mock data for resources
const allResources: Resource[] = [
  {
    id: 'tool-1',
    name: 'Vulnerability Scanner',
    type: 'tool',
    path: '/tools/scanner',
    description: 'Scans for security vulnerabilities',
  },
  {
    id: 'tool-2',
    name: 'Code Analyzer',
    type: 'tool',
    path: '/tools/analyzer',
    description: 'Analyzes code quality and patterns',
  },
  {
    id: 'doc-1',
    name: 'User Guide',
    type: 'document',
    path: '/docs/guide',
    description: 'Complete user documentation',
  },
  {
    id: 'tool-3',
    name: 'Dependency Checker',
    type: 'tool',
    path: '/tools/dependencies',
    description: 'Checks for outdated dependencies',
  },
  {
    id: 'template-1',
    name: 'Security Template',
    type: 'template',
    path: '/templates/security',
    description: 'Security configuration template',
  },
  {
    id: 'tool-4',
    name: 'Performance Monitor',
    type: 'tool',
    path: '/tools/monitor',
    description: 'Monitors application performance',
  },
];

export async function POST(request: NextRequest) {
  try {
    const body: ListResourcesRequest = await request.json();
    const { path = '', cursor = null, only_tools = false } = body;

    let filteredResources = allResources;

    // Filter by path if provided
    if (path) {
      filteredResources = filteredResources.filter(resource =>
        resource.path.startsWith(path)
      );
    }

    // Filter by only_tools if true
    if (only_tools) {
      filteredResources = filteredResources.filter(
        resource => resource.type === 'tool'
      );
    }

    // Handle pagination with cursor
    const pageSize = 10;
    let startIndex = 0;

    if (cursor) {
      const cursorIndex = parseInt(cursor, 10);
      if (!isNaN(cursorIndex)) {
        startIndex = cursorIndex;
      }
    }

    const endIndex = startIndex + pageSize;
    const paginatedResources = filteredResources.slice(startIndex, endIndex);
    const nextCursor =
      endIndex < filteredResources.length ? endIndex.toString() : null;

    const response: ListResourcesResponse = {
      resources: paginatedResources,
      next_cursor: nextCursor,
    };

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to list resources' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const path = searchParams.get('path') || '';
  const cursor = searchParams.get('cursor');
  const only_tools = searchParams.get('only_tools') === 'true';

  let filteredResources = allResources;

  // Filter by path if provided
  if (path) {
    filteredResources = filteredResources.filter(resource =>
      resource.path.startsWith(path)
    );
  }

  // Filter by only_tools if true
  if (only_tools) {
    filteredResources = filteredResources.filter(
      resource => resource.type === 'tool'
    );
  }

  // Handle pagination with cursor
  const pageSize = 10;
  let startIndex = 0;

  if (cursor) {
    const cursorIndex = parseInt(cursor, 10);
    if (!isNaN(cursorIndex)) {
      startIndex = cursorIndex;
    }
  }

  const endIndex = startIndex + pageSize;
  const paginatedResources = filteredResources.slice(startIndex, endIndex);
  const nextCursor =
    endIndex < filteredResources.length ? endIndex.toString() : null;

  const response: ListResourcesResponse = {
    resources: paginatedResources,
    next_cursor: nextCursor,
  };

  return NextResponse.json(response);
}
