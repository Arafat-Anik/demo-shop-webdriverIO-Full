const searchActions = require("../pages/search/searchActions");   // Import actions 
const addToCartActions = require("../pages/addToCart/addToCartActions");
const checkoutActions = require("../pages/checkout/checkoutActions");
const utility = require("../Utilities/utility");
const loginActions = require("../pages/login/loginActions");

var productName = "";    // So that We can use this dynamically for many field
var productQty;  // This value will get from random number 
var singleProductPrice;  //This value will get from text to number convert value

describe ("Demo evershop site product purchase journey", () => {
    it ("Should able to successfully search product", async() => {
        const number = await utility.randomNumber(4,1);
        productName = await searchActions.selectedProductfromList(number);
        await searchActions.clickOnSearchIcon();
        await searchActions.enterSearchItemName(productName);
        await browser.keys("Enter");
        //await browser.qut();

    });

    it ("Should able to Successfully add Product in Add to Cart", async() => {
        await addToCartActions.clickOnProductfromList(productName);

        const number = await utility.randomNumber(2,1);         // Random Product Size generate between X(1), S(2) 
        await addToCartActions.selectProductSize(number);
        await addToCartActions.selectProductColor();
       // await addToCartActions.enterProductqty(productqty);
        productQty = await utility.randomNumber(10, 1);
        await addToCartActions.enterProductqty(productQty);
        singleProductPrice = await addToCartActions.getSingleProductPrice();  //This value will get from text to number convert value
        await addToCartActions.clickOnAddtoCartButton();
        await addToCartActions.clickOnViewCartButton();
       // await browser.qut();

    });

    it ("Should successfully verify total amount and grand total price", async() => {
        //const singleProductPrice = await addToCartActions.getSingleProductPrice();
        const expectedTotalPrice = productQty * singleProductPrice;  // Single Product * qty = expected Product total Price
        const actualSubTotal = await checkoutActions.getSubTotalAmount();
        const actualGrandTotal = await checkoutActions.getGrandTotalAmount();
        expect(expectedTotalPrice).toEqual(actualSubTotal);
        expect(expectedTotalPrice).toEqual(actualGrandTotal);   

    });

    it ("Should be able to successfully Logout", async() => {
        await loginActions.clickOnProfileIcon();
        await loginActions.clickOnLogoutButton();
        await browser.pause(5000);

    });

});