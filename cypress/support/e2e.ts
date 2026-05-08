import './commands';
import 'cypress-mochawesome-reporter/register';

beforeEach(() => {
  cy.viewport(1280, 720);
});

afterEach(function () {
  const test = this.currentTest;

  if (!test) {
    return;
  }

  const status = (test.state ?? 'unknown').toUpperCase();
  const safeTitle = test.title.replace(/[<>:"/\\|?*]+/g, ' ').trim();

  cy.log(`Remark: ${status} - ${test.title}`);
  cy.screenshot(`test-result/${status} -- ${safeTitle}`, { capture: 'fullPage' });
});
