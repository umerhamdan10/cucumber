import {ClientFunction} from 'testcafe'
import { JSDOM } from 'jsdom';
import CH24HomePage from '../pages/CH24HomePage'

const url = 'https://www.check24.de/'
const getUrl = ClientFunction(() => window.location.href);
let jsdom = new JSDOM();
const getdoc = ClientFunction(() => console.log('document', document));



test('Loading Home Page', async t => {

    await t.expect(CH24HomePage.btnAcceptCookies.exists).ok();
    CH24HomePage.clickOnBtnAcceptCookies();

    await t.expect(CH24HomePage.btnVersicherungenV.exists).ok();
    CH24HomePage.clickOnBtnVersicherungenV();

});
