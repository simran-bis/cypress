## Project Description
This is a automation test script for project insightmonk

## Prerequisites For Installing Cypress
1.NodeJS installed in your sysytem.

## How to Install and Run the Project.
step 1-  npm init to install package.json.
step 2- install cypress in your project
npm install cypress --save-dev.

## Getting Started.
npx cypress open 
" this command  will open browser/applictaion."

##  generate html report for test cases.

Step 1 - Install mochawesome library

npm install mochawesome --save-dev

Step 2 - Install mochawesome-merge library

npm install mochawesome-merge --save-dev

Step 3 - Add reports configuration in cypress.json

{
 "reporter": "mochawesome",
 "reporterOptions": {
   "charts": true,
   "overwrite": false,
   "html": false,
   "json": true,
   "reportDir": "cypress/report/mochawesome-report"
  }
 }

Step 4 - Run command to execute tests

npx cypress run --reporter mochawesome

Step 5 - Run command to merge multiple json reports into one

npx mochawesome-merge ./cypress/reports/*.json ＞report1.json

Step 6 - Run command to generate html report
npx marge ./report1.json --reportDir .\cypress\reports.
this command will create html report.

## pass environment     variable from comand line
CYPRESS_BASE_URL ='https://dev-community.insightmonk.com/discover' node_modules/.bin/cypress open



