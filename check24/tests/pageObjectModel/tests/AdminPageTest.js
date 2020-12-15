import {ClientFunction} from 'testcafe'
import LoginPageHR from '../pages/LoginPageHR'
import IndexPage from '../pages/AdminPage'

const url = 'https://opensource-demo.orangehrmlive.com/index.php/auth/login'
const getUrl = ClientFunction(() => window.location.href);

fixture('Login Page HR')
.page(url)
.beforeEach( async t =>{

    await t
    .expect(getUrl()).contains(url)
    .expect(LoginPageHR.loginBtn.exists).ok();

    LoginPageHR.setUserName('Admin');
    LoginPageHR.setPassword('admin123');
    LoginPageHR.clickOnLoginButton(); 

    await t.expect(LoginPageHR.logoutBtn.exists).ok();

});

test('test', async t =>{ 
    
    await t.expect(IndexPage.adminMeduleBtn.exists).ok();
    IndexPage.clickOnAdminMeduleButton();

    await t.expect(IndexPage.addUserBtn.exists).ok();
    IndexPage.clickOnAddUserBtn();

    await t.expect(IndexPage.userHeading.exists).ok();
    await t
    .click(IndexPage.userRole)
    .click(IndexPage.userRoleOption.withText('Admin'))
    .expect(IndexPage.userRole.value).eql('1');

    IndexPage.addEmployeName('John Smith');
    IndexPage.addUserName('TestUser2');

    await t
    .click(IndexPage.userStatus)
    .click(IndexPage.userStatusOption.withText('Enabled'))
    .expect(IndexPage.userStatus.value).eql('1');

    IndexPage.addUserPassword('TestUser@1234');
    IndexPage.addPasswordConfirmation('TestUser@1234');

    IndexPage.clickOnUserSaveBtn();
    
    await t
    .expect(IndexPage.Usertabel.exists).ok();


});
