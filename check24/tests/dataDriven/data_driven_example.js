import {Selector, t, ClientFunction} from 'testcafe';

const dataSet = require('../../data/data.json');

const getUrl = ClientFunction(()=> window.location);

fixture('JSON - Data Driven Demo')
.skip

dataSet.forEach(data => {

    test
    .page("http://the-internet.herokuapp.com/login")
    (`Login Page Validation - ${data.expectedMessage}`, async t => {

        await t
        .maximizeWindow()
        .typeText(Selector('input#username'), data.userName)
        .typeText(Selector('input#password'), data.password)
        .click('button');

        await t.expect(Selector('div#flash').innerText).contains(data.expectedMessage);

    });

});
