var HomePage = function(){

    const inputitem = element(by.css('.new-todo'));   
    const clearbtn = $('.clear-completed');

    this.open = function(){
        browser.get('https://todomvc.com/examples/angular2/');
    };
    
    this.addNewItem = function(AddItem){
        inputitem.sendKeys(AddItem).sendKeys(protractor.Key.ENTER);
        };

    this.deleteItem = function(delItem){
        let deleteitem = element(by.cssContainingText('.todo-list li', delItem));
        browser.actions().mouseMove(deleteitem).perform();
        deleteitem.$('.destroy').click();
        };
    
    this.editExistingItem = function(orgname, newname){
        let edititem = element(by.cssContainingText('.todo-list li', orgname));
        browser.actions().doubleClick(edititem).perform();
        const editTodoInput = $('.edit');
        editTodoInput.sendKeys(newname);
        editTodoInput.sendKeys(protractor.Key.ENTER);
        };

    this.editCompletedItem = function(ogname,nwname){
        let editCompitem = element(by.cssContainingText('.todo-list li', ogname));
        browser.actions().doubleClick(editCompitem).perform();
        const editCompInput = $('.edit');
        editCompInput.sendKeys(nwname);
        editCompInput.sendKeys(protractor.Key.ENTER);
        };
    
    this.markItemComplete = function(markcomplete){
        let markComplete = element(by.cssContainingText('.todo-list li', markcomplete));
        const markComp = markComplete.$('.toggle');
        markComp.click();
        };

    this.clearCompletedItems = function(){
        clearbtn.click();
    };

    this.verifyCompItemText = function(compitem){
        const edititem1 = element(by.cssContainingText('.todo-list li', compitem));
        const todocompleted = edititem1.$('label');
        expect(todocompleted.getCssValue("text-decoration-line")).toEqual('line-through');
    };
    
    this.verifyCountText = function(counttext){
        let verifyCount = element(by.css('.todo-count'));
        expect(verifyCount.getText()).toEqual(counttext);
    };

    this.verifyItemAdded = function(itemname){
        let itemName = element(by.css('.todo-list li'));
        expect(itemName.getText()).toEqual(itemname);
    };

      this.verifyItemDeleted = function(delname){
        let delItemName = element(by.css('.todo-list li'));
        expect(delItemName.getText()).not.toEqual(delname);
    };
    this.verifyItemsAdded = function(itemslist){
        let todo_List = element.all(by.css('.todo-list li'));
        expect(todo_List.getText()).toEqual(itemslist);
    };

};

module.exports = new HomePage();