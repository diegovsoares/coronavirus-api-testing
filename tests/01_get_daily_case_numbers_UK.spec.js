// @ts-check
const { test, expect } = require('@playwright/test');

test('should be able to get the daily coronavirus case numbers for the UK', async ({ request }) => {

    const response = await request.get('', {
        params: {
            filters: `areaType=overview`,
            structure: `{"date":"date","newCases":"newCasesByPublishDate"}`
        },
    });

    //Test assertions
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.length).toBeGreaterThanOrEqual(1);
    expect(body.data[0].newCases).toBeGreaterThanOrEqual(0);
    console.log('Response body:', body);
});