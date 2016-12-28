System.register(['@angular/core', './modal.component'], function(exports_1, context_1) {
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
    var core_1, modal_component_1;
    var OpenWithDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (modal_component_1_1) {
                modal_component_1 = modal_component_1_1;
            }],
        execute: function() {
            OpenWithDirective = (function () {
                function OpenWithDirective() {
                    this.confirm = new core_1.EventEmitter();
                }
                OpenWithDirective.prototype.clicked = function () {
                    this.modalInstance.open(this.emitConfirm.bind(this));
                };
                OpenWithDirective.prototype.emitConfirm = function () {
                    this.confirm.emit(null);
                };
                __decorate([
                    core_1.Input('open-with'), 
                    __metadata('design:type', modal_component_1.ModalComponent)
                ], OpenWithDirective.prototype, "modalInstance", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], OpenWithDirective.prototype, "confirm", void 0);
                __decorate([
                    core_1.HostListener('click'), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], OpenWithDirective.prototype, "clicked", null);
                OpenWithDirective = __decorate([
                    core_1.Directive({
                        selector: '[open-with]'
                    }), 
                    __metadata('design:paramtypes', [])
                ], OpenWithDirective);
                return OpenWithDirective;
            }());
            exports_1("OpenWithDirective", OpenWithDirective);
        }
    }
});
//# sourceMappingURL=open-modal.directive.js.map