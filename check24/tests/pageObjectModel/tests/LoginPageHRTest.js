import {ClientFunction} from 'testcafe'
import LoginPageHR from '../pages/LoginPageHR'

const url = 'https://opensource-demo.orangehrmlive.com/index.php/auth/login'
const getUrl = ClientFunction(() => window.location.href);

fixture('Login Page HR')
.page(url)

test('Loading HR Login Page', async t => {

    await t
    .expect(getUrl()).contains(url)
    .expect(LoginPageHR.loginBtn.exists).ok();

});

test('Successfully Login HR page', async t => {

    LoginPageHR.setUserName('Admin');
    LoginPageHR.setPassword('admin123');
    LoginPageHR.clickOnLoginButton(); 

    await t.expect(LoginPageHR.logoutBtn.exists).ok();
});


test('Invalid Credential', async t => {

    LoginPageHR.setUserName('wrongUserName');
    LoginPageHR.setPassword('WrongPassword!');
    LoginPageHR.clickOnLoginButton();

    await t.expect(LoginPageHR.spanMessages.innerText).eql('Invalid credentials');
    

});

test('Empty Credential', async t => {

    LoginPageHR.clickOnLoginButton();

    await t.expect(LoginPageHR.spanMessages.innerText).contains('Username cannot be empty');
    

});