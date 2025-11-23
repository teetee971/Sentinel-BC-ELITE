'use client';

import { useState } from 'react';
import { api_tool, Resource } from '../lib/api-tool';

export default function TestApiTool() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [nextCursor, setNextCursor] = useState<string | null>(null);

  const testListResources = async () => {
    setLoading(true);
    setError(null);
    try {
      // Test case from problem statement
      const result = await api_tool.list_resources({
        path: '',
        cursor: null,
        only_tools: true,
      });
      setResources(result.resources);
      setNextCursor(result.next_cursor || null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const testListAllResources = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await api_tool.list_resources({
        path: '',
        cursor: null,
        only_tools: false,
      });
      setResources(result.resources);
      setNextCursor(result.next_cursor || null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const testListWithPath = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await api_tool.list_resources({
        path: '/tools',
        cursor: null,
        only_tools: false,
      });
      setResources(result.resources);
      setNextCursor(result.next_cursor || null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>API Tool Test Page</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={testListResources}
          disabled={loading}
          style={{ 
            marginRight: '10px', 
            padding: '10px 20px',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          Test: List Tools Only (Problem Statement)
        </button>

        <button 
          onClick={testListAllResources}
          disabled={loading}
          style={{ 
            marginRight: '10px', 
            padding: '10px 20px',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          Test: List All Resources
        </button>

        <button 
          onClick={testListWithPath}
          disabled={loading}
          style={{ 
            padding: '10px 20px',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          Test: List /tools Path
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {resources.length > 0 && (
        <div>
          <h2>Results ({resources.length} resources)</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {resources.map((resource) => (
              <li 
                key={resource.id}
                style={{ 
                  border: '1px solid #ddd',
                  padding: '10px',
                  marginBottom: '10px',
                  borderRadius: '5px'
                }}
              >
                <strong>{resource.name}</strong> ({resource.type})
                <br />
                <small style={{ color: '#666' }}>
                  Path: {resource.path}
                  {resource.description && ` - ${resource.description}`}
                </small>
              </li>
            ))}
          </ul>
          {nextCursor && (
            <p style={{ color: '#0070f3' }}>
              Next cursor available: {nextCursor}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
