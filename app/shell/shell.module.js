System.register(['@angular/core', './header.component', './menu.component', './sidebar.component', './../user-profile/user-profile.module'], function(exports_1, context_1) {
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
    var core_1, header_component_1, menu_component_1, sidebar_component_1, user_profile_module_1;
    var ShellModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (menu_component_1_1) {
                menu_component_1 = menu_component_1_1;
            },
            function (sidebar_component_1_1) {
                sidebar_component_1 = sidebar_component_1_1;
            },
            function (user_profile_module_1_1) {
                user_profile_module_1 = user_profile_module_1_1;
            }],
        execute: function() {
            ShellModule = (function () {
                function ShellModule() {
                }
                ShellModule = __decorate([
                    core_1.NgModule({
                        imports: [user_profile_module_1.UserProfileModule],
                        declarations: [header_component_1.HeaderComponent, sidebar_component_1.SidebarComponent, menu_component_1.MenuComponent],
                        exports: [header_component_1.HeaderComponent, sidebar_component_1.SidebarComponent, menu_component_1.MenuComponent],
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShellModule);
                return ShellModule;
            }());
            exports_1("ShellModule", ShellModule);
        }
    }
});
//# sourceMappingURL=shell.module.js.map