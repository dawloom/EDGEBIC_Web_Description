/**
 * Script to check available Payload CMS endpoints
 * Run with: node scripts/check-payload-endpoints.js
 */

const PAYLOAD_BASE_URL = 'http://localhost:3001';

async function checkEndpoints() {
  console.log('🔍 Checking Payload CMS endpoints...\n');

  const endpointsToCheck = [
    '/api',
    '/api/pages',
    '/api/posts',
    '/api/blog',
    '/api/blogs',
    '/api/articles',
    '/api/content'
  ];

  for (const endpoint of endpointsToCheck) {
    const url = `${PAYLOAD_BASE_URL}${endpoint}`;
    try {
      console.log(`Trying: ${url}`);
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        console.log(`✅ FOUND! Status: ${response.status}\n`);

        // Show structure
        if (data.docs) {
          console.log(
            `   📊 Total docs: ${data.totalDocs || data.docs.length}`
          );
          if (data.docs.length > 0) {
            console.log(`   📄 Sample fields:`, Object.keys(data.docs[0]));
          }
        } else {
          console.log(`   📋 Response keys:`, Object.keys(data));
        }
        console.log('');
      } else {
        console.log(`   ❌ ${response.status} ${response.statusText}\n`);
      }
    } catch (error) {
      console.log(`   ⚠️  Error: ${error.message}\n`);
    }
  }

  console.log('\n💡 Next steps:');
  console.log('   1. Check your Payload CMS admin panel');
  console.log('   2. Look at the sidebar to see collection names');
  console.log(
    '   3. Try the endpoint: http://localhost:3001/api/{collection-name}'
  );
}

checkEndpoints();
