// @ts-check
const { test, expect } = require('@playwright/test');

test('should be able to get the daily coronavirus case numbers for a given nation and date', async ({ request }) => {

    const nation = 'Scotland'; //Valid parameters: England | Northern Ireland | Scotland | Wales
    const date = '2020-07-23'; //Date format: YYYY-MM-DD

    const response = await request.get('', {
        params: {
            filters: `areaType=nation;areaName=${nation};date=${date}`,
            structure: `{"nation":"areaName","date":"date","newCases":"newCasesByPublishDate"}`
        },
    });

    //Test assertions
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.length).toBeGreaterThanOrEqual(1);
    expect(body.data[0].nation).toBe(nation);
    expect(body.data[0].date).toBe(date);
    expect(body.data[0].newCases).toBeGreaterThanOrEqual(0);
    console.log('Response body:', body);
});