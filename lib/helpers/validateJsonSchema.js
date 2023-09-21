const { expect } = require('@playwright/test');
const Ajv = require("ajv")

/**
 * Validates an object against a JSON schema.
 *
 * @param {string} fileName - The first part of the name of the JSON schema file. The full name will be `${fileName}_schema.json`.
 * @param {object} body - The object to validate against the JSON schema.
 *
 * @example
 *    const body = await response.json();
 *
 *    // This will run the assertion against the existing schema file
 *    await validateJsonSchema("GET_clients", body);
 *
 */
export async function validateJsonSchema(fileName, body) {
    const jsonName = fileName;

    const existingSchema = require(`../../.api/${jsonName}_schema.json`);

    const ajv = new Ajv({ allErrors: false });
    const validate = ajv.compile(existingSchema);
    const validRes = validate(body);

    if (!validRes) {
        console.log("SCHEMA ERRORS:", JSON.stringify(validate.errors), "\nRESPONSE BODY:", JSON.stringify(body));
    }

    expect(validRes).toBe(true);
}