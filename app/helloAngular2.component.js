System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var HelloAngular2Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HelloAngular2Component = (function () {
                function HelloAngular2Component() {
                    this.sayHello = new core_1.EventEmitter();
                }
                HelloAngular2Component.prototype.onSayHelloClicked = function () {
                    this.sayHello.emit("Hello " + this.who);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], HelloAngular2Component.prototype, "who", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], HelloAngular2Component.prototype, "sayHello", void 0);
                HelloAngular2Component = __decorate([
                    core_1.Component({
                        selector: 'hello-angular',
                        template: "\n    <p>Hello, {{ who }}</p>\n    <button (click)=\"onSayHelloClicked()\">Say Hello</button>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], HelloAngular2Component);
                return HelloAngular2Component;
            }());
            exports_1("HelloAngular2Component", HelloAngular2Component);
        }
    }
});
//# sourceMappingURL=helloAngular2.component.js.map