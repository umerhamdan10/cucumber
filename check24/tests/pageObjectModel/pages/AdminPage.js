import {Selector, t} from 'testcafe'

class IndexPage{

    constructor(){
        this.adminMeduleBtn = Selector('a#menu_admin_viewAdminModule');
        this.addUserBtn = Selector('input#btnAdd');
        this.userHeading = Selector('h1#UserHeading');

        this.userRole = Selector('#systemUser_userType');
        this.userRoleOption = this.userRole.find('option');
        this.employeName = Selector('#systemUser_employeeName_empName');
        this.userName = Selector('#systemUser_userName');
        this.userStatus = Selector('#systemUser_status');
        this.userStatusOption = this.userStatus.find('option');;
        this.userPassword = Selector('#systemUser_password');
        this.userPasswordConfirmation = Selector('#systemUser_confirmPassword');

        this.saveBtn = Selector('#btnSave');
        this.Usertabel = Selector('#frmList_ohrmListComponent')


    
    }


    async clickOnAdminMeduleButton(){
        await t.click(this.adminMeduleBtn);
    }

    async clickOnAddUserBtn(){
        await t.click(this.addUserBtn);
    }

    async clickOnUserSaveBtn(){
        await t.click(this.saveBtn);
    }

    async addEmployeName(employeName){
            await t
            .typeText(this.employeName, employeName);
    }

    async addUserName(userName){
        await t
        .typeText(this.userName, userName);
    } 

    async addUserPassword(userPassword){
        await t
        .typeText(this.userPassword, userPassword);
    } 

    async addPasswordConfirmation(userPasswordConfirmation){
        await t
        .typeText(this.userPasswordConfirmation, userPasswordConfirmation);
    } 

}

export default new IndexPage();