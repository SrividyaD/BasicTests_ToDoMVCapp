const basicTests = require('../Pages/HomePage');

describe('Basic tests for ToDo app', function () {

  let item1 = 'Requirement Analysis';
  let item2 = 'Test Strategy';
  let item3 = 'Test Plan';
  let item4 = 'Test Design';
  let item5 = 'Test Execution';
  let item6 = 'Defect Report';
  let item7 = 'Defect Report';
  let editname = '_updated';
  let item8 = '     ';
  let item9 = 'हिन्दी';
  
  it('should open todos application', function () {
    basicTests.open();
    expect(browser.getTitle()).toEqual('Angular2 • TodoMVC');
  });
  browser.sleep(1000);

  // Basic Scenario
  it('add 1 item to list', function () {
    basicTests.addNewItem(item1);
    basicTests.verifyItemAdded(item1);
    basicTests.verifyCountText(1 + ' item left');
  });
  browser.sleep(2000);
  
  // @positive - Scenario 1
  it('add multiple items to list', function () {
    basicTests.addNewItem(item2);
    basicTests.addNewItem(item3);
    basicTests.addNewItem(item4);
    basicTests.addNewItem(item5);
    basicTests.verifyItemsAdded([item1, item2, item3, item4, item5]);
    basicTests.verifyCountText(5 + ' items left');
  });
  browser.sleep(2000);

  // @positive - Scenario 2
  it('mark 2 items complete', function () {
    basicTests.markItemComplete(item2);
    basicTests.markItemComplete(item3);
    basicTests.verifyCompItemText(item2);
    basicTests.verifyCompItemText(item3);
    basicTests.verifyCountText(3 + ' items left');
  });
  browser.sleep(2000);
  
  // @positive - Scenario 3
  it('delete 1 item', function () {
    basicTests.deleteItem(item4);
    basicTests.verifyItemDeleted(item4);
    basicTests.verifyCountText(2 + ' items left');
  });
  browser.sleep(2000);

  // @positive - Scenario 4
  it('edit 1 item', function () {
    basicTests.editExistingItem(item5, editname);
    basicTests.verifyCountText(2 + ' items left');
  });
  browser.sleep(2000);

  // @negative - Scenario 1
  it('add duplicate items', function () {
    basicTests.addNewItem(item6);
    basicTests.addNewItem(item7);
    basicTests.verifyItemsAdded([item1, item2, item3, item5 + editname, item6, item7]);
    basicTests.verifyCountText(4 + ' items left');
  });
  browser.sleep(2000);

  // @negative - Scenario 2
  it('edit completed item', function () {
    basicTests.editCompletedItem(item2, editname);
    basicTests.verifyCountText(4 + ' items left');
  });
  browser.sleep(2000);

  //@negative - Scenario 3
  it('add blank spaces', function () {
    basicTests.addNewItem(item8);
    basicTests.verifyCountText(4 + ' items left');
  });
  browser.sleep(2000);

  //@negative - Scenario 4
  it('add other langugage script', function () {
    basicTests.addNewItem(item9);
    basicTests.verifyCountText(5 + ' items left');
  });
  browser.sleep(6000);

  // @positive - Scenario 5
  it('clear completed items', function () {
    basicTests.clearCompletedItems();
    basicTests.verifyCountText(5 + ' items left');
  });

});