const addToCartLocators = require("./addToCartLocators");
const utility = require("../../Utilities/utility");
//const addToCartActions = require("./");

//   if we need to pass extra peramiter in utility then use extends
//   Its Function Overloading

//   class AddToCartActions extnds utility {
//     async convertTextToNumber(text, cylValue)
//     Const value = parseFloat(text.replace(/[$, ]/g, “”).”*2.0”);
//     return value;  
//    }


class AddToCartActions {
    async clickOnProductfromList(productName){
       await addToCartLocators.productFromList(productName).click();   //Inside "await" for import async await. 
    }

    async selectProductSize(number){
        await addToCartLocators.productSize(number).click();
        await browser.pause(3000);
    }

    async selectProductColor(){
        await addToCartLocators.productColor.click();
        await browser.pause(3000);
    }

    async enterProductqty(qty){
        await addToCartLocators.inputproductQty.setValue(qty);
    }

    async clickOnAddtoCartButton(){
        await addToCartLocators.buttonAddtoCart.click();
    }

    async clickOnViewCartButton(){
        await addToCartLocators.buttonViewCartFromModal.click();
    }

    async getSingleProductPrice(){
        const productPrice = await addToCartLocators.PriceFromProductPage.getText();
        const productPriceInNumber = await utility.convertTexttoNumber(productPrice);
        return productPriceInNumber;
    }
}

module.exports = new AddToCartActions();