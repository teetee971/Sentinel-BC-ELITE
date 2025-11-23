# List Resources API Implementation

This implementation provides an API endpoint for listing resources with filtering and pagination capabilities.

## API Endpoint

### POST /api/resources

Lists resources based on the provided filters.

#### Request Body

```json
{
  "path": "",
  "cursor": null,
  "only_tools": true
}
```

#### Parameters

- `path` (string, optional): Filter resources by path prefix. Empty string returns all paths.
- `cursor` (string | null, optional): Pagination cursor for fetching the next page of results.
- `only_tools` (boolean, optional): When true, only returns resources of type 'tool'. Default is false.

#### Response

```json
{
  "resources": [
    {
      "id": "tool-1",
      "name": "Vulnerability Scanner",
      "type": "tool",
      "path": "/tools/scanner",
      "description": "Scans for security vulnerabilities"
    }
  ],
  "next_cursor": null
}
```

#### Response Fields

- `resources` (array): Array of resource objects matching the filters.
- `next_cursor` (string | null): Cursor for fetching the next page. Null if no more pages.

### GET /api/resources

Alternative GET endpoint with query parameters.

#### Query Parameters

- `path`: Filter by path prefix
- `cursor`: Pagination cursor
- `only_tools`: Set to "true" to filter for tools only

Example: `/api/resources?path=/tools&only_tools=true`

## Client Usage

### Using the api_tool wrapper

```typescript
import { api_tool } from './app/lib/api-tool';

// Example from problem statement
const result = await api_tool.list_resources({
  path: "",
  cursor: null,
  only_tools: true
});

console.log(result.resources); // Array of tools
console.log(result.next_cursor); // Pagination cursor
```

### Test Page

Visit `/test` to access the interactive test page that demonstrates the API functionality.

## Resource Types

Resources can be of the following types:
- `tool`: Utility or service tools
- `document`: Documentation resources
- `template`: Template configurations

## Implementation Details

- **Location**: `/app/api/resources/route.ts`
- **Client Library**: `/app/lib/api-tool.ts`
- **Test Page**: `/app/test/page.tsx`
- **Page Size**: 10 resources per page (configurable)
- **Mock Data**: Currently uses 6 sample resources (4 tools, 1 document, 1 template)

## Features

✅ Path-based filtering  
✅ Type-based filtering (only_tools)  
✅ Cursor-based pagination  
✅ Both POST and GET methods supported  
✅ Type-safe TypeScript interfaces  
✅ Error handling
