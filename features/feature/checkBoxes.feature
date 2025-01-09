Feature: Verify Checkboxes page

Scenario: Verify user is able to check checkboxes

Given the user navigated to the homepage
When the user clicks on Checkboxes link
Then the user should be able to check "checkboxNumber"

Examples:
|checkboxNumber|
|1|
|2|