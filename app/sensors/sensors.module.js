System.register(['@angular/core', '../tabs/tabs.module', './humidity.component', './donut-chart.directive'], function(exports_1, context_1) {
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
    var core_1, tabs_module_1, humidity_component_1, donut_chart_directive_1;
    var SensorsModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tabs_module_1_1) {
                tabs_module_1 = tabs_module_1_1;
            },
            function (humidity_component_1_1) {
                humidity_component_1 = humidity_component_1_1;
            },
            function (donut_chart_directive_1_1) {
                donut_chart_directive_1 = donut_chart_directive_1_1;
            }],
        execute: function() {
            SensorsModule = (function () {
                function SensorsModule() {
                }
                SensorsModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            tabs_module_1.TabsModule
                        ],
                        declarations: [humidity_component_1.HumiditySensorComponent, donut_chart_directive_1.DonutChartDirective],
                        exports: [humidity_component_1.HumiditySensorComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SensorsModule);
                return SensorsModule;
            }());
            exports_1("SensorsModule", SensorsModule);
        }
    }
});
//# sourceMappingURL=sensors.module.js.map