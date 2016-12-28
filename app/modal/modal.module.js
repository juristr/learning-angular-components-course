System.register(['@angular/core', '@angular/common', './modal.component', './open-modal.directive'], function(exports_1, context_1) {
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
    var core_1, common_1, modal_component_1, open_modal_directive_1;
    var ModalModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (modal_component_1_1) {
                modal_component_1 = modal_component_1_1;
            },
            function (open_modal_directive_1_1) {
                open_modal_directive_1 = open_modal_directive_1_1;
            }],
        execute: function() {
            ModalModule = (function () {
                function ModalModule() {
                }
                ModalModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            common_1.CommonModule
                        ],
                        declarations: [modal_component_1.ModalComponent, open_modal_directive_1.OpenWithDirective],
                        exports: [modal_component_1.ModalComponent, open_modal_directive_1.OpenWithDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ModalModule);
                return ModalModule;
            }());
            exports_1("ModalModule", ModalModule);
        }
    }
});
//# sourceMappingURL=modal.module.js.map