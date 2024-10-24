//const loginLocators = require("../login/loginLocators");
//const login = new loginLocators;

 //    (As, LoginLocator have same input field)

 
class signupLocators {  //Same field LoginLocators a ache, tai Extend
    get createFullName(){
        return $("//input[@name='full_name']");
    }

    get createAccountLink(){
        return $("//a[contains(text(),'Create an account')]");
    }
    // Or we can use these code again in here//

    // get createNewEmail(){
    //     return $("//input[@name='email']");
    // }

    // get createNewPassword(){
    //     return $("//i nput[@name='password']");
    // }

    // get clickButtonSignup(){
    //     return $("//button[@class='button primary']");
    // }
}

module.exports = new signupLocators();