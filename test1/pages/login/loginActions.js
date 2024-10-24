const loginLocators = require("./loginLocators");

class loginActions{
    async clickOnProfileIcon(){
        await loginLocators.profileIcon.click();
    }

    async enterEmail(email){  // Future a email pass korte parbo
        await loginLocators.loginEmail.setValue(email);
    }

    async enterPassword(password){
        await loginLocators.loginPassword.setValue(password);
    }

    async clickOnSignInButton(){
        await loginLocators.buttonSignup.click();
    }

    async clickOnLogoutButton(){
        await loginLocators.buttonLogout.click();
    }

}

module.exports = new loginActions();