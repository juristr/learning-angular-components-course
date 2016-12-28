System.register(['./person'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var person_1;
    var p;
    return {
        setters:[
            function (person_1_1) {
                person_1 = person_1_1;
            }],
        execute: function() {
            p = new person_1.Person('Juri');
            p.registerSayHello();
            document.getElementById('someButton').click();
        }
    }
});
