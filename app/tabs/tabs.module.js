System.register(['@angular/common', '@angular/core', './tab.component', './tabs.component', './../core/core.module'], function(exports_1, context_1) {
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
    var common_1, core_1, tab_component_1, tabs_component_1, core_module_1;
    var TabsModule;
    return {
        setters:[
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tab_component_1_1) {
                tab_component_1 = tab_component_1_1;
            },
            function (tabs_component_1_1) {
                tabs_component_1 = tabs_component_1_1;
            },
            function (core_module_1_1) {
                core_module_1 = core_module_1_1;
            }],
        execute: function() {
            TabsModule = (function () {
                function TabsModule() {
                }
                TabsModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            common_1.CommonModule,
                            core_module_1.CoreModule
                        ],
                        declarations: [tabs_component_1.TabsComponent, tab_component_1.TabComponent],
                        exports: [tabs_component_1.TabsComponent, tab_component_1.TabComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TabsModule);
                return TabsModule;
            }());
            exports_1("TabsModule", TabsModule);
        }
    }
});
//# sourceMappingURL=tabs.module.js.map