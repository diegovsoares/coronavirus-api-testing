---
# Playwright UK Coronavirus Open Data API (APIv1) Testing Framework
---

This is a Playwright API testing framework designed to test (a small part of) the UK Coronavirus Open Data API (APIv1)

## Features of this framework
* Playwright API Testing

## Getting started

### Pre-requisites
* Download and install Node.js
* Download and install any Text Editor like Visual Code/Sublime/Brackets

### Setup Scripts 
* Clone the repository into a folder
* Go to Project root directory and install Dependency: `npm install`
* All the dependencies from package.json would be installed in node_modules folder.

### Install Visual Code Extension (Optional)
* <a href="https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright" target="_blank">Playwright Test for VSCode</a>

## How to Run Test Locally
* Go to the Project root directory and run command: `npm test`

## How to Run Single Spec Locally
* Go to the Project root directory and run command: `npx playwright test tests/01_get_daily_case_numbers_UK.spec.js`

## How to view default Playwright HTML report
* To open last HTML report run: `npx playwright show-report`
