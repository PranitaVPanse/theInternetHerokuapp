Feature: Add/Remove Element Page Validation

Scenario: Verify user is able to add an element
Given the user navigated to the homepage
When the user clicks on AddRemove Elements link
When the user clicks on Add Element button
Then Delete button should be visible to the user


Scenario: Verify user is able to delete an element
Given the user navigated to the homepage
When the user clicks on AddRemove Elements link
When the user clicks on Add Element button
And the user clicks on Delete Element button