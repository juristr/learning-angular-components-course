import { browser, element, by } from 'protractor';

describe('Sensor config', function () {

  beforeEach(() => {
    browser.get('#/config');
  });

  it('should have 3 sensors listed', () => {
    expect(element.all(by.css('sensor-list > table > tbody > tr')).count()).toBeGreaterThan(0);
  });

   it('open the modal dialog', () => {
       // opens the modal
       element.all(by.css('sensor-list tr button')).filter((elem, index) => {
          return elem.getText().then(function(text) {
             return text === 'QUICK ADD';
          });
       }).first().click();

       element.all(by.css('modal > div')).isDisplayed().then((result) => {
          expect(result).toBeTruthy();
       });
   });


});
