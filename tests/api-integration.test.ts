import { shortest } from "@antiwork/shortest";

shortest ('Verify that product data loads correctly from the API and displays on the page')
    .after(async ({page})=> {
        const apiResponses = await page.evaluate(() =>
            performance.getEntriesByType('resource')
                .filter(entry => entry.name.includes('api'))
        );
        expect(apiResponses.length).toBeGreaterThan(0)
    });

shortest("Test that the search functionality returns correct results from the backend API");