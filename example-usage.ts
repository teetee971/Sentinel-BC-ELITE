/**
 * Example usage of api_tool.list_resources
 * 
 * This demonstrates the exact usage from the problem statement.
 */

import { api_tool } from './app/lib/api-tool';

async function main() {
  console.log('=== List Resources API Tool Demo ===\n');

  // Example from problem statement
  console.log('Test 1: List only tools (problem statement example)');
  console.log('Call: api_tool.list_resources({ path: "", cursor: null, only_tools: true })');
  
  try {
    const result1 = await api_tool.list_resources({
      path: '',
      cursor: null,
      only_tools: true,
    });
    
    console.log('Response:');
    console.log(JSON.stringify(result1, null, 2));
    console.log('\n');

    // Additional examples
    console.log('Test 2: List all resources');
    console.log('Call: api_tool.list_resources({ path: "", cursor: null, only_tools: false })');
    
    const result2 = await api_tool.list_resources({
      path: '',
      cursor: null,
      only_tools: false,
    });
    
    console.log('Response:');
    console.log(`Found ${result2.resources.length} total resources`);
    console.log('\n');

    console.log('Test 3: Filter by path');
    console.log('Call: api_tool.list_resources({ path: "/tools", cursor: null, only_tools: false })');
    
    const result3 = await api_tool.list_resources({
      path: '/tools',
      cursor: null,
      only_tools: false,
    });
    
    console.log('Response:');
    console.log(`Found ${result3.resources.length} resources in /tools`);
    result3.resources.forEach(r => {
      console.log(`  - ${r.name} (${r.type}): ${r.path}`);
    });
    console.log('\n');

    console.log('✓ All tests completed successfully!');
  } catch (error) {
    console.error('Error:', error);
  }
}

// Note: This is a client-side example that would run in a browser or Next.js environment
// For demonstration purposes only - actual execution requires a running Next.js server

console.log('This example shows how to use api_tool.list_resources()');
console.log('To test the API, start the Next.js server and visit /test');
