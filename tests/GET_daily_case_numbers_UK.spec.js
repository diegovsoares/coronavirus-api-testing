// @ts-check
const { test, expect } = require('@playwright/test');

test('should be able to get the daily coronavirus case numbers for the UK', async ({ request }) => {

    const response = await request.get('', {
        params: {
            filters: `areaType=overview`,
            structure: `{"date":"date","newCases":"newCasesByPublishDate"}`
        },
    });

    //Storing the response body in JSON format
    const responseBody = await response.json();

    //Test assertions
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    expect(responseBody.length).toBeGreaterThanOrEqual(1);
    expect(responseBody.data[0].newCases).toBeGreaterThanOrEqual(0);

    //Printing the response body to the console
    //console.log('Response body:', responseBody);
});

