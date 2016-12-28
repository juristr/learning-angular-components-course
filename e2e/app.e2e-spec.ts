import { browser, element, by } from 'protractor';

describe('App', function() {

   beforeEach(function() {
       browser.get('');
   });

   it('should have an app header', function() {
       expect(element(by.css('app-header')).isPresent()).toEqual(true);
   });

   it('should have an app sidebar', function() {
       expect(element(by.css('app-sidebar')).isPresent()).toEqual(true);
   });

});


// describe('aotapp App', function() {
//   let page: AotappPage;

//   beforeEach(() => {
//     page = new AotappPage();
//   });

//   it('should display message saying app works', () => {
//     page.navigateTo();



//     expect(page.getParagraphText()).toEqual('app works!');
//   });
// });
