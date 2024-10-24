const signupActions = require("../pages/signup/signupActions");
const loginActions = require("../pages/login/loginActions");
const utility = require("../Utilities/utility");

var email = "";
var fullName = "";
var password = "";

describe ("Demo evershop site product purchase journey", () => {

    it ("Should able to successfully register account", async() => {
       await loginActions.clickOnProfileIcon();
       await signupActions.ClickOnCreateAccount();
       fullName = await utility.createRandomSting(5);
       email = fullName + "@yomail.com";
       password = fullName + "#$#$#$#$0";
       await signupActions.EnterNewFullName(fullName);
       await loginActions.enterEmail(email);
       await loginActions.enterPassword(password);
       await loginActions.clickOnSignInButton();
       await browser.pause(3000);
    });

    it.skip ("Should be able to successfully Logout", async() => { // Akhane .skip means register ar por Logout process skip hobe
        await loginActions.clickOnProfileIcon();
        await loginActions.clickOnLogoutButton();
        await browser.pause(5000);
     });

    it.skip ("Should be able to successfully Login", async() => {
        await loginActions.clickOnProfileIcon();
        await browser.pause(5000);
        await loginActions.enterEmail(email);
        await loginActions.enterPassword(password);
        await loginActions.clickOnSignInButton();
     });

});