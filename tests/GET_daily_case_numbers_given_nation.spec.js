// @ts-check
const { test, expect } = require('@playwright/test');

test('should be able to get the daily coronavirus case numbers for a given nation', async ({ request }) => {

    const nation = 'Scotland'; //Valid parameters: England | Northern Ireland | Scotland | Wales

    const response = await request.get('', {
        params: {
            filters: `areaType=nation;areaName=${nation}`,
            structure: `{"nation":"areaName","date":"date","newCases":"newCasesByPublishDate"}`
        },
    });

    //Storing the response body in JSON format
    const responseBody = await response.json();

    //Test assertions
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    expect(responseBody.length).toBeGreaterThanOrEqual(1);
    expect(responseBody.data[0].nation).toBe(nation);
    expect(responseBody.data[0].newCases).toBeGreaterThanOrEqual(0);

    //Printing the response body to the console
    //console.log('Response body:', responseBody);
});


test('should not be able to get the daily coronavirus case numbers for an empty nation', async ({ request }) => {

    const nation = ''; //Valid parameters: England | Northern Ireland | Scotland | Wales

    const response = await request.get('', {
        params: {
            filters: `areaType=nation;areaName=${nation}`,
            structure: `{"nation":"areaName","date":"date","newCases":"newCasesByPublishDate"}`
        },
    });

    //Test assertions
    expect(response.ok()).toBeFalsy();
    expect(response.status()).toBe(400);
});