System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Person;
    return {
        setters:[],
        execute: function() {
            Person = (function () {
                function Person(name) {
                    this.name = name;
                }
                Person.prototype.registerSayHello = function () {
                    var _this = this;
                    document.getElementById('someButton').addEventListener('click', function () {
                        console.log('Hi, I am a ' + _this + ' and my name is ' + _this.name);
                    });
                };
                return Person;
            }());
            exports_1("Person", Person);
        }
    }
});
