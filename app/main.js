System.register(['@angular/platform-browser-dynamic', '@angular/platform-browser', '@angular/common', '@angular/core', '@angular/router', '@angular/http', 'material-design-lite', './app.component', './dashboard/dashboard.component', './sensor-config/sensor-config.component', './core/core.module', './dashboard/dashboard.module', './shell/shell.module', './sensor-config/sensor-config.module'], function(exports_1, context_1) {
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
    var platform_browser_dynamic_1, platform_browser_1, common_1, core_1, router_1, http_1, materialLite, app_component_1, dashboard_component_1, sensor_config_component_1, core_module_1, dashboard_module_1, shell_module_1, sensor_config_module_1;
    var appRoutes, AppModule;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (materialLite_1) {
                materialLite = materialLite_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (sensor_config_component_1_1) {
                sensor_config_component_1 = sensor_config_component_1_1;
            },
            function (core_module_1_1) {
                core_module_1 = core_module_1_1;
            },
            function (dashboard_module_1_1) {
                dashboard_module_1 = dashboard_module_1_1;
            },
            function (shell_module_1_1) {
                shell_module_1 = shell_module_1_1;
            },
            function (sensor_config_module_1_1) {
                sensor_config_module_1 = sensor_config_module_1_1;
            }],
        execute: function() {
            appRoutes = [
                { path: '', component: dashboard_component_1.DashboardComponent },
                { path: 'config', component: sensor_config_component_1.SensorConfigureComponent },
                { path: '**', component: dashboard_component_1.DashboardComponent }
            ];
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            common_1.CommonModule,
                            http_1.HttpModule,
                            router_1.RouterModule.forRoot(appRoutes, { useHash: true }),
                            core_module_1.CoreModule,
                            dashboard_module_1.DashboardModule,
                            shell_module_1.ShellModule,
                            sensor_config_module_1.SensorConfigModule
                        ],
                        declarations: [app_component_1.AppComponent],
                        bootstrap: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule)
                .then(function () {
                materialLite.componentHandler.upgradeAllRegistered();
            });
        }
    }
});
//# sourceMappingURL=main.js.map