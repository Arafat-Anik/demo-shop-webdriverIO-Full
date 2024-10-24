const searchLocators = require ("./searchLocators");  // import the file

class SearchActions{
    async clickOnSearchIcon(){
        await searchLocators.searchIcon.click();
    }

    async enterSearchItemName(productName){
        await searchLocators.searchInput.setValue(productName);
    }

   async search(productName){              //We can use it also
       await this.clickOnSearchIcon();
       await this.enterSearchItemName(productName);
   }

    async selectedProductfromList(num){
       return await searchLocators.productList(num).getText();
    }

}

module.exports = new SearchActions();