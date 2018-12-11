# Assignment 2 - Vue app - Automated development process.

Name: Ying Yan

Student No.: 20082241 

Github Respository: https://github.com/gullveigy/accountingcpher.git

## Overview.

...... A statement of the Vue app's context and objectives (just a paragraph)........

     This is an online accounting web app. 

     The functions that have been realized are getting all the expenditure records of one user, CRUD operations on these records by this user.

     The function that dding a new record will trigger a new page. 

## E2E Testing.

. . . A listing of the output generated locally from running ONE of your spec test files (choose the best one). The command to produce this is similar to the following:

     $ npx cypress run --spec cypress/integration/expenditures.spec.js

     (Run Starting)

     ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
     │ Cypress:    3.1.3                                                                              │
     │ Browser:    Electron 59 (headless)                                                             │
     │ Specs:      1 found (expenditures.spec.js)                                                     │
     │ Searched:   cypress/integration/expenditures.spec.js                                           │
     └────────────────────────────────────────────────────────────────────────────────────────────────┘
     ────────────────────────────────────────────────────────────────────────────────────────────────────
      
												    
     Running: expenditures.spec.js...                                                         (1 of 1)
    
     
     Manage Expenditures page
     ✓ allows a expenditure record to be edited (3126ms)
     ✓ should contains a expenditure record edited (1105ms)
     ✓ allows a expenditure record to be deleted (753ms)
     ✓ should only contain original 2 records (1457ms)
     Manage Expenditures page filter Functions
     ✓ allows the records can be filtered by payment (1231ms)
     ✓ allows the records can be filtered date (878ms)
     ✓ allows the records can be filtered type (984ms)

     7 passing (7s)

     (Results)

     ┌──────────────────────────────────────┐
     │ Tests:        7                      │
     │ Passing:      7                      │
     │ Failing:      0                      │
     │ Pending:      0                      │
     │ Skipped:      0                      │
     │ Screenshots:  0                      │
     │ Video:        true                   │
     │ Duration:     5 seconds              │
     │ Spec Ran:     expenditures.spec.js   │
     └──────────────────────────────────────┘


     (Run Finished)


     Spec                                                Tests  Passing  Failing  Pending  Skipped 
    ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
    │ ✔ expenditures.spec.js                    00:04        7        7        -        -        -   │
    └────────────────────────────────────────────────────────────────────────────────────────────────┘
     All specs passed!                           00:04        7        7        -        -        - 
     
     The command "npx cypress run  --spec cypress/integration/expenditures.spec.js" exited with 0.


## Continuous Integration.

. . . URL of the Travis build page for the Vue app, e.g.

https://travis-ci.org/gullveigy/accountingcpher

## Automated Deployment.

.... Specify the URL of the auto-deployed Vue app, e.g. 

http://exotic-advice.surge.sh/

## Extra features.

. . . . Briefly state any extra aspects of your automation process that you feel should be high-lighted . . . . .

## Appendix.

. . . .  A listing of the output generated from running locally all of your spec test files. The command to produce this is:

     $ npx cypress run

     (Run Starting)


     ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
     │ Cypress:    3.1.3                                                                              │
     │ Browser:    Electron 59 (headless)                                                             │
     │ Specs:      1 found (home-page.spec.js)                                                        │
     │ Searched:   cypress/integration/home-page.spec.js                                              │
     └────────────────────────────────────────────────────────────────────────────────────────────────┘
     ────────────────────────────────────────────────────────────────────────────────────────────────────


     Running: home-page.spec.js...                                                            (1 of 1) 


     Home page
       Navigation bar
     ✓ Shows the required links (885ms)
     ✓ Redirects when links are clicked (949ms)
       Home page layout and required links
     ✓ Shows the required links and titles (407ms)
     ✓ Redirects when btn1 links are clicked (341ms)
     ✓ Redirects when btn2 links are clicked (383ms)


     5 passing (3s)


     (Results)

     ┌─────────────────────────────────┐
     │ Tests:        5                 │
     │ Passing:      5                 │
     │ Failing:      0                 │
     │ Pending:      0                 │
     │ Skipped:      0                 │
     │ Screenshots:  0                 │
     │ Video:        true              │
     │ Duration:     3 seconds         │
     │ Spec Ran:     home-page.spec.js │
     └─────────────────────────────────┘


     (Run Finished)

         Spec                                                Tests  Passing  Failing  Pending  Skipped 

     ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
     │ ✔ home-page.spec.js                         00:03        5        5        -        -        - │
     └────────────────────────────────────────────────────────────────────────────────────────────────┘
      All specs passed!                           00:03        5        5        -        -        -
     
     The command "npx cypress run  --spec cypress/integration/home-page.spec.js" exited with 0.


     (Run Starting)


     ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
     │ Cypress:    3.1.3                                                                              │
     │ Browser:    Electron 59 (headless)                                                             │
     │ Specs:      1 found (expendi.spec.js)                                                          │
     │ Searched:   cypress/integration/expendi.spec.js                                                │
     └────────────────────────────────────────────────────────────────────────────────────────────────┘
     ────────────────────────────────────────────────────────────────────────────────────────────────────


     Running: expendi.spec.js...   


     Expendi page
     ✓ shows error messages for incomplete form fields (2131ms)
     ✓ allows a valid expenditure record to be submitted (2224ms)


     2 passing (4s)


     (Results)

     ┌───────────────────────────────┐
     │ Tests:        2               │
     │ Passing:      2               │
     │ Failing:      0               │
     │ Pending:      0               │
     │ Skipped:      0               │
     │ Screenshots:  0               │
     │ Video:        true            │
     │ Duration:     4 seconds       │
     │ Spec Ran:     expendi.spec.js │
     └───────────────────────────────┘


     (Run Finished)


         Spec                                                Tests  Passing  Failing  Pending  Skipped
	 
     ┌────────────────────────────────────────────────────────────────────────────────────────���───────┐
     │ ✔ expendi.spec.js                           00:04        2        2        -        -        -   │
     └──────────────────────────────────────────────────────────────────────────────────────────────────┘
      All specs passed!                           00:04        2        2        -        -        - 
      
     The command "npx cypress run  --spec cypress/integration/expendi.spec.js" exited with 0.


     (Run Starting)


     ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
     │ Cypress:    3.1.3                                                                              │
     │ Browser:    Electron 59 (headless)                                                             │
     │ Specs:      1 found (expenditures.spec.js)                                                     │
     │ Searched:   cypress/integration/expenditures.spec.js                                           │
     └────────────────────────────────────────────────────────────────────────────────────────────────┘
     ────────────────────────────────────────────────────────────────────────────────────────────────────


     Running: expenditures.spec.js...                                                         (1 of 1) 


     Manage Expenditures page
     ✓ allows a expenditure record to be edited (3126ms)
     ✓ should contains a expenditure record edited (1105ms)
     ✓ allows a expenditure record to be deleted (753ms)
     ✓ should only contain original 2 records (1457ms)
     Manage Expenditures page filter Functions
     ✓ allows the records can be filtered by payment (1231ms)
     ✓ allows the records can be filtered date (878ms)
     ✓ allows the records can be filtered type (984ms)


     7 passing (6s)


     (Results)

     ┌──────────────────────────────────────┐
     │ Tests:        7                      │
     │ Passing:      7                      │
     │ Failing:      0                      │
     │ Pending:      0                      │
     │ Skipped:      0                      │
     │ Screenshots:  0                      │
     │ Video:        true                   │
     │ Duration:     4 seconds              │
     │ Spec Ran:     expenditures.spec.js   │
     └──────────────────────────────────────┘


     (Run Finished)


         Spec                                                Tests  Passing  Failing  Pending  Skipped 
     
     ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
     │ ✔ expendituresup.spec.js                    00:04        4        4        -        -        - │
     └────────────────────────────────────────────────────────────────────────────────────────────────┘
      All specs passed!                           00:04        4        4        -        -        -  

     The command "npx cypress run  --spec cypress/integration/expenditures.spec.js" exited with 0.


     (Run Starting)


     ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
     │ Cypress:    3.1.3                                                                              │
     │ Browser:    Electron 59 (headless)                                                             │
     │ Specs:      1 found (expendituresup.spec.js)                                                   │
     │ Searched:   cypress/integration/expendituresup.spec.js                                         │
     └────────────────────────────────────────────────────────────────────────────────────────────────┘
     ────────────────────────────────────────────────────────────────────────────────────────────────────


     Running: expendituresup.spec.js...                                                       (1 of 1) 


     Manage Expenditures page
     ✓ should only contain original 2 records (1457ms)
     Manage Expenditures page filter Functions
     ✓ allows the records can be filtered by payment (1231ms)
     ✓ allows the records can be filtered date (878ms)
     ✓ allows the records can be filtered type (984ms)


     4 passing (5s)


     (Results)

     ┌──────────────────────────────────────┐
     │ Tests:        4                      │
     │ Passing:      4                      │
     │ Failing:      0                      │
     │ Pending:      0                      │
     │ Skipped:      0                      │
     │ Screenshots:  0                      │
     │ Video:        true                   │
     │ Duration:     4 seconds              │
     │ Spec Ran:     expendituresup.spec.js │
     └──────────────────────────────────────┘


     (Run Finished)


         Spec                                                Tests  Passing  Failing  Pending  Skipped 


     ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
     │ ✔ expendituresup.spec.js                    00:04        4        4        -        -        - │
     └────────────────────────────────────────────────────────────────────────────────────────────────┘
      All specs passed!                           00:04        4        4        -        -        - 
      
      The command "npx cypress run  --spec cypress/integration/expendituresup.spec.js" exited with 0.




