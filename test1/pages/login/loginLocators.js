class Login {
    get profileIcon(){
        return $("//a[contains(@href,'/account')]");  // We need to pick common element, so that we can use it for differently
    }

    get loginEmail(){
        return $("//input[@name='email']");
    }

    get loginPassword(){
        return $("//input[@name='password']");
    }

    get buttonSignup(){
        return $("//button[@class='button primary']");
        // or  return $("//button[@type='submit']");
    }

    get buttonLogout(){
        return $("//a[contains(text(),'Logout')]");
    }

}

module.exports = new Login();
