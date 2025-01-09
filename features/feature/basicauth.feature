Feature: Basic Auth validation Page

Scenario Outline: Verify user is able to signin successfully
Given the user navigated to the Basic Auth link using "<username"> and "<password>" credentials
Then the user should be able to signin successfully

Examples:
|username|password|
|admin|admin|


Scenario Outline: Verify user is NOT able to signin with incorrect credentials
Given the user navigated to the Basic Auth link using "<username"> and "<password>" credentials
Then the user should not be able to signin successfully
Then the user click on Cancel and Not authorized error is displayed

Examples:
|username|password|
|admin123|admin|
|admin|admin123|
