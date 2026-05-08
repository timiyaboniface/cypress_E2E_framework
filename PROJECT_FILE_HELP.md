# Project File Help Guide

This document explains what each major file and folder does in this Cypress automation project, and when you should edit it.

## Root level

### .gitignore
Purpose: Tells Git which generated files/folders to ignore.
When to edit: Add new temporary/build folders that should not be committed.

### package.json
Purpose: Project metadata, dependency list, and runnable npm scripts.
When to edit:
- Add or update packages.
- Add new run commands (for smoke, regression, browser-specific runs).
- Open report quickly with report:open.

### package-lock.json
Purpose: Locks exact dependency versions for stable installs.
When to edit: Usually auto-updated by npm. Do not edit manually.

### cypress.config.ts
Purpose: Global Cypress settings such as base URL, timeouts, retries, folders, and spec pattern.
When to edit:
- Change environment URL.
- Tune timeouts/retries.
- Add node event hooks.

### tsconfig.json
Purpose: TypeScript compiler rules for Cypress tests and config files.
When to edit:
- Change compiler options.
- Add include/exclude patterns.

### README.md
Purpose: Main onboarding and usage documentation for the framework.
When to edit:
- Add setup notes.
- Update command examples.
- Document new test coverage.

### clean-install.bat
Purpose: Windows batch helper for quick cleanup and reinstall.
When to use: If dependencies are broken and you need a clean install cycle.

### clean-install.ps1
Purpose: PowerShell helper for cleanup and reinstall.
When to use: Same use case as batch file, with PowerShell workflow.

### PROJECT_FILE_HELP.md
Purpose: This detailed file-by-file explanation guide.
When to edit: Keep aligned with project structure updates.

## cypress folder

### cypress/e2e/saucedemo.cy.ts
Purpose: Main spec file containing smoke and regression scenarios.
When to edit:
- Add/modify test cases.
- Organize scenarios by describe blocks.

### cypress/fixtures/users.json
Purpose: Test data source (users, passwords, checkout fields, product values).
When to edit:
- Add new test users.
- Update data values used by tests.

### cypress/support/e2e.ts
Purpose: Global support entry for Cypress e2e tests; loaded before spec execution.
When to edit:
- Add global hooks.
- Import custom commands.
- Add shared setup/teardown logic.

### cypress/support/commands.ts
Purpose: Home for custom Cypress commands reused across tests.
When to edit:
- Add reusable actions as custom commands.
- Reduce repeated command chains in specs.

### cypress/support/pages/LoginPage.ts
Purpose: Page object for login page locators and actions.
When to edit:
- Login selectors changed.
- New login assertions/actions needed.

### cypress/support/pages/InventoryPage.ts
Purpose: Page object for inventory/product page actions and checks.
When to edit:
- Product interaction selectors or logic changed.

### cypress/support/pages/CartPage.ts
Purpose: Page object for cart interactions and validations.
When to edit:
- Cart element locators changed.
- Cart behavior assertions expanded.

### cypress/support/pages/CheckoutPage.ts
Purpose: Page object for checkout form and order completion flow.
When to edit:
- Checkout fields/messages changed.
- New checkout validations added.

### cypress/reports/screenshots
Purpose: Stores screenshots generated on failures (or explicit capture).
When to edit: Usually not edited manually.

### cypress/reports/html
Purpose: Stores generated Mochawesome HTML and JSON reports.
When to edit: Usually not edited manually; clean periodically.

### cypress/reports/videos
Purpose: Stores execution videos when video recording is enabled.
When to edit: Usually not edited manually.

### cypress/downloads
Purpose: Stores files downloaded during test execution.
When to edit: Usually not edited manually; clean up as needed.

## scripts folder

### scripts/clean.js
Purpose: Node script used by npm clean to remove generated artifacts and reset project state.
When to edit:
- Add/remove folders that should be cleaned.
- Improve cleanup logic for your environment.

## How files work together

1. You run an npm command from package.json.
2. Cypress starts using cypress.config.ts settings.
3. Support files load first (e2e.ts, commands.ts).
4. Spec file runs and uses page object classes.
5. Page objects interact with the website.
6. Test data is read from fixtures.
7. Artifacts are saved into reports/downloads folders.

## Where to see execution report

1. HTML report file: cypress/reports/html/index.html
2. Report JSON file: cypress/reports/html/index.json
3. Screenshot evidence: cypress/reports/screenshots
4. Quick open command: npm run report:open

## Quick onboarding path for new users

1. Read README.md first.
2. Read this PROJECT_FILE_HELP.md for detailed file responsibilities.
3. Run npm install.
4. Start with npm run open (headed Chrome).
5. Open saucedemo.cy.ts and any page file to understand test flow.
6. Modify users.json and re-run smoke tests.

## Change checklist before commit

- If test logic changed, update saucedemo.cy.ts and relevant page files.
- If test data changed, update users.json.
- If run behavior changed, update package.json scripts.
- If runtime settings changed, update cypress.config.ts.
- Update README.md and this file for any structural change.
