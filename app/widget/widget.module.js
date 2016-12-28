System.register(['./../core/core.module', './widget.component', '@angular/core'], function(exports_1, context_1) {
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
    var core_module_1, widget_component_1, core_1;
    var WidgetModule;
    return {
        setters:[
            function (core_module_1_1) {
                core_module_1 = core_module_1_1;
            },
            function (widget_component_1_1) {
                widget_component_1 = widget_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            WidgetModule = (function () {
                function WidgetModule() {
                }
                WidgetModule = __decorate([
                    core_1.NgModule({
                        imports: [core_module_1.CoreModule],
                        declarations: [widget_component_1.WidgetComponent],
                        exports: [widget_component_1.WidgetComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], WidgetModule);
                return WidgetModule;
            }());
            exports_1("WidgetModule", WidgetModule);
        }
    }
});
//# sourceMappingURL=widget.module.js.map