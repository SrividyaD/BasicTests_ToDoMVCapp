# BasicTests_ToDoMVCapp
Test Cases for To-Do MVC application

Objective:
Write UI tests for to-do web-app and automate 

What is being tested :
Basic functions of to-do list such as add, edit, delete will be tested  

Architecture:
The framework is using Page Object Model, that is used to segregate page dependent information from test logic. 

There are 3 files within the project structure

1. Pages - Page objects are included in this folder
2. Tests - functional tests are included in this folder
3. Conf - configuration files are included in this folder

Other folders that would be created once the tests are run :
1. Allure-results : Allure reports are located in this folder
2. Screenshots : screenshots for failed test specs
3. Target/Screenshots : screenshots for each spec 

List of Test Cases automated are as below

Positive Test cases
—————————

Scenario 1 - Add multiple items to list
	Validate Items added successfully
	Validate Footer text is correct

Scenario 2 - Mark 2 items complete
	Validate item name has strike-through
	Validate Footer text has the decreased count

Scenario 3 - Delete 1 item
	Validate item does not exist
	Validate Footer text has decreased count

Scenario 4 - Edit 1 item
	Append new text to existing text
	Validate item name has new text included
	Validate Footer text is correct

Scenario 5 - Clear completed button works
	Validate items are cleared form list
	Validate footer text is correct

Negative Test Cases

—————————-

Scenario 1 - Add duplicate items
	Validate duplicate items are not added
	Validate footer text does not add count

Scenario 2 - Edit completed item
	Validate item name has strike-through
	Append new text to existing text
	Validate footer text does not add count

Scenario 3 - Add Blank spaces
	Validate item is not added
	Validate footer text does not add count

Scenario 4 - Add item in other script than English
	Validate item is added successfully
	Validate footer text has increased count

Results

———-

Negative Scenario 1 fails as per below expected result. 
Expected Result (assumed) = Duplicate items are not allowed to be added
Actual Result (observed) = Duplicate items are allowed to be added
Note: If Acceptance criteria mentions duplicate items can be added, then this test case would not be a failed.

All other test cases pass as expected.
