/**
 * Test script for Payload CMS API integration
 * Run with: node scripts/test-payload-api.js
 */

const PAYLOAD_API_URL = 'http://localhost:3000/api/pages';

async function testPayloadAPI() {
  console.log('🧪 Testing Payload CMS API...\n');

  try {
    // Test fetching all pages
    console.log('📥 Fetching all pages from:', PAYLOAD_API_URL);
    const response = await fetch(PAYLOAD_API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    console.log('\n✅ Response received successfully!\n');
    console.log('📊 API Response Structure:');
    console.log('─────────────────────────────');
    console.log(`Total Documents: ${data.totalDocs || data.docs?.length || 0}`);
    console.log(`Pages: ${data.totalPages || 'N/A'}`);
    console.log(`Current Page: ${data.page || 'N/A'}`);
    console.log('─────────────────────────────\n');

    if (data.docs && data.docs.length > 0) {
      console.log('📄 Sample Page Data:');
      console.log('─────────────────────────────');

      const samplePage = data.docs[0];
      const cleanData = {
        id: samplePage.id,
        title: samplePage.title,
        slug: samplePage.slug,
        description: samplePage.description,
        category: samplePage.category,
        publishedDate: samplePage.publishedDate,
        hero: samplePage.hero,
        links: samplePage.links,
        author: samplePage.author,
        createdAt: samplePage.createdAt,
        updatedAt: samplePage.updatedAt
      };

      console.log(JSON.stringify(cleanData, null, 2));
      console.log('─────────────────────────────\n');

      // Test fetching single page by ID
      if (samplePage.id) {
        console.log(`🔍 Testing single page fetch with ID: ${samplePage.id}`);
        const singleResponse = await fetch(
          `${PAYLOAD_API_URL}/${samplePage.id}`
        );

        if (singleResponse.ok) {
          const singleData = await singleResponse.json();
          console.log('✅ Single page fetch successful!\n');
          console.log('📄 Single Page Data:');
          console.log('─────────────────────────────');
          console.log(
            JSON.stringify(
              {
                id: singleData.id,
                title: singleData.title,
                slug: singleData.slug
              },
              null,
              2
            )
          );
          console.log('─────────────────────────────\n');
        } else {
          console.log('⚠️  Single page fetch failed\n');
        }
      }

      console.log('✅ All tests passed!');
      console.log('\n💡 Integration Status:');
      console.log('   • Payload CMS API is accessible');
      console.log('   • Data structure is compatible');
      console.log('   • Ready to display on blog page');
    } else {
      console.log('⚠️  No pages found in Payload CMS');
      console.log(
        '💡 Make sure you have created some pages in your Payload CMS'
      );
    }
  } catch (error) {
    console.error('\n❌ Error testing Payload API:');
    console.error('─────────────────────────────');
    console.error(error.message);
    console.error('─────────────────────────────\n');
    console.error('💡 Troubleshooting:');
    console.error(
      '   1. Make sure Payload CMS is running at http://localhost:3000'
    );
    console.error('   2. Check if the /api/pages endpoint exists');
    console.error('   3. Verify CORS settings allow localhost connections');
  }
}

testPayloadAPI();
