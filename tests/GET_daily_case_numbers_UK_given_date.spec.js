// @ts-check
const { test, expect } = require('@playwright/test');
import { validateJsonSchema } from "../lib/helpers/validateJsonSchema";

test('should be able to get the daily coronavirus case numbers for the UK for a given date', async ({ request }) => {

    const date = '2020-07-23'; //Date format: YYYY-MM-DD

    const response = await request.get('', {
        params: {
            filters: `areaType=overview;date=${date}`,
            structure: `{"date":"date","newCases":"newCasesByPublishDate"}`
        },
    });

    //Storing the response body in JSON format
    const responseBody = await response.json();

    //Test assertions
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    expect(responseBody.length).toBeGreaterThanOrEqual(1);
    expect(responseBody.data[0].date).toBe(date);
    expect(responseBody.data[0].newCases).toBeGreaterThanOrEqual(0);

    //Validating the response JSON schema
    await validateJsonSchema("GET_daily_case_numbers_UK_given_date", responseBody);

    //Printing the response body to the console
    //console.log('Response body:', responseBody);
});


test('should not be able to get the daily coronavirus case numbers for the UK for an empty date', async ({ request }) => {

    const date = ''; //Date format: YYYY-MM-DD

    const response = await request.get('', {
        params: {
            filters: `areaType=overview;date=${date}`,
            structure: `{"date":"date","newCases":"newCasesByPublishDate"}`
        },
    });

    //Test assertions
    expect(response.ok()).toBeFalsy();
    expect(response.status()).toBe(400);
});