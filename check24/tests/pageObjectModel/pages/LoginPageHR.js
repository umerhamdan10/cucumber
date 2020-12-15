import {Selector, t} from 'testcafe'

class LoginPage{

    constructor(){
        this.userNameInput = Selector('input#txtUsername');
        this.passwordInput = Selector('input#txtPassword');
        this.loginBtn = Selector('input#btnLogin');
        this.logoutBtn = Selector('#welcome');
        this.spanMessages = Selector('#spanMessage');
    
    }

    async setUserName(userName){
        await t
        .typeText(this.userNameInput, userName);
    }

    async setPassword(password){
        await t
        .typeText(this.passwordInput, password);
    }

    async clickOnLoginButton(){
        await t
        .click(this.loginBtn);
    }

}

export default new LoginPage();