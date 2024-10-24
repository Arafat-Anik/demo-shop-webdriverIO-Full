//const loginActions = require("../login/loginActions");
const signupLocators = require("./signupLocators");


class SignupActions {                                       //extends Login
    async EnterNewFullName(fullname){
        await signupLocators.createFullName.setValue(fullname);
    }

    async ClickOnCreateAccount(){
        await signupLocators.createAccountLink.click();
    }

}
module.exports = new SignupActions();

