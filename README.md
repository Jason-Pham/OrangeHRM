# OrangeHRM Project

## Project Description

This repository contains automated tests for the OrangeHRM platform using Playwright and TypeScript. It serves as a practical demonstration of test automation skills, covering both User Interface (UI) and Application Programming Interface (API) testing.

The project aims to provide robust automated checks to ensure the functionality and stability of key areas within the OrangeHRM application.

## Project Status

* **Status:** In Progress

* **Version:** 1.0.0

## Technologies Used

* **Programming Language:** TypeScript

* **Testing Framework:** Playwright

* **Runtime Environment:** Node.js (v18 recommended)

* **Package Manager:** npm

* **Test Runner:** Playwright Test Runner

* **Reporting:** Playwright HTML Reporter (default)

## Features

* **UI Tests:** Automated tests for user interface workflows, such as login and navigation.

* **API Tests:** Automated tests for OrangeHRM API endpoints to validate data and functionality at the service layer.

* **Extensible Structure:** Project structure designed to easily accommodate additional test types (e.g., performance, security) if needed.

## Setup and Installation

To get this project running on your local machine, follow these steps:

1. **Ensure Node.js is installed:** It is recommended to use **Node.js v18**. You can download it from <https://nodejs.org/>.

2. **Clone the repository:**

   ```
   git clone [https://github.com/Jason-Pham/OrangeHRM.git](https://github.com/Jason-Pham/OrangeHRM.git)
   cd OrangeHRM

   ```

3. **Install dependencies:**

   ```
   npm install

   ```

   This command will install Playwright and all other necessary dependencies defined in `package.json`.

4. **Install Playwright browsers:**

   ```
   npx playwright install

   ```

   This command downloads the browser binaries needed by Playwright (Chromium, Firefox, and WebKit).

5. **Configuration:**

   * Update the `playwright.config.ts` file if necessary to adjust settings like the base URL, browser projects, etc.

   * Consider using environment variables or a separate configuration file for sensitive information like credentials (e.g., using a `.env` file and a library like `dotenv`). **Do not hardcode sensitive information directly in the tests.**
   * Or contact me for an example of `.env`.
   * Or create one yourself using the `.env.example`.

## Usage

Once the project is set up, you can run the tests using the Playwright test runner:

* **To run all UI tests:**

  ```
  npm run ui-test-all

  ```

* **To run debug UI tests:**

  ```
  npm run ui-debug

  ```

* **To run API tests only (currently just API health check test):**

  ```
  npm run api-healthcheck

  ```

* **To run tests on a specific browser (e.g., Chromium):**

  ```
  npm run ui-test-google-chrome

  ```

* **To run tests in headed mode (show browser UI):**

  ```
  npx playwright test --headed

  ```

* **To generate and show the HTML test report (after the test finished):**

  ```
  npx playwright show-report

  ```

## Tests

* Automated tests are organized by type:

  * **UI Tests:** Located in the `tests/UI` directory.

  * **API Tests:** Located in the `tests/API` directory.

* Tests are written in TypeScript using the Playwright test framework.

* Test reports are automatically generated after each run and can be viewed using `npx playwright show-report`.

## Framework Structure

The project follows a clear directory structure to organize tests, configurations, and supporting files:

```
.
├── .github/
│   ├── actions/
│   │   └── run-playwright-tests/
│   │       └── action.yml
│   └── workflows/
│       ├── playwright-chromium.yml
│       ├── playwright-firefox.yml
│       ├── playwright-google-chrome.yml
│       ├── playwright-safari.yml
│       ├── playwright-test-all-browsers.yml
│       └── playwright-test-api.yml
├── node_modules/
├── playwright-report/
├── test-results/
├── tests/
│   ├── API/
│   │   ├── config/
│   │   │   └── playwright.config.ts
│   │   ├── helpers/
│   │   │   └── const.ts
│   │   └── *.spec.ts --API test cases
│   └── UI/
│       ├── config/
│       │   └── .auth/
│       │   └── playwright.config.ts
│       └── helpers/
│           ├── common-actions.ts
│           ├── const.ts
│           ├── *.setup.ts --UI test setup files
│           └── *.spec.ts --UI test cases
├── .env
├── .env.example
├── .gitignore
├── env.d.ts
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```


## CI/CD

This project includes a basic CI/CD pipeline to automate the execution of tests. The pipeline is configured to run tests automatically on every push to `main`, pull requests.

Also, a scheduled workflow of API tests and all browser tests would be triggered every day.

The CI/CD workflow configuration can be found in the source code at `.github`.


## Future Improvements

* Add more comprehensive test coverage for various OrangeHRM modules and functionalities.

* Consider implementing the Page Object Model (POM) design pattern for UI tests to improve maintainability and readability as the test suite grows.

* Implement more advanced reporting or logging mechanisms.


## License

This project is licensed under the MIT License.


## Contact

If you have any questions or suggestions, feel free to reach out:

* **GitHub:** <https://github.com/Jason-Pham>
