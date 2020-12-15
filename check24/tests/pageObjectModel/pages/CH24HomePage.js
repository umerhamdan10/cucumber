import {Selector, t} from 'testcafe';
import { JSDOM } from 'jsdom';

class CH24HomePage{

    constructor(
        
    ){
        const dom = new JSDOM();
        global.window = dom.window;
        global.document = dom.window.document;
        this.btnAcceptCookies = Selector('a.c24-cookie-consent-button').withText('Akzeptieren');


        this.btnVersicherungen = Selector('a').withAttribute('title', 'Versicherungen');
        
        this.logoutBtn = Selector('a.button');
    
    }

    async clickOnBtnAcceptCookies(){
        await t
        .click(this.btnAcceptCookies);
    }

    
    async clickOnBtnVersicherungen(){
        await t
        .click(this.btnVersicherungen);
    }
    async clickOnBtnVersicherungenV(){
        await t
        .click(this.btnVersicherungenV);
    }

}

export default new CH24HomePage();