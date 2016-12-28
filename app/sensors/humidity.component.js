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
    var HumiditySensorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HumiditySensorComponent = (function () {
                function HumiditySensorComponent() {
                    this.temperature = 21;
                    this.humidityPercent = 34;
                }
                HumiditySensorComponent.prototype.ngOnInit = function () { };
                HumiditySensorComponent.prototype.changeHumidity = function () {
                    var newVal = Math.floor(Math.random() * 100);
                    this.humidityPercent = newVal;
                };
                HumiditySensorComponent = __decorate([
                    core_1.Component({
                        selector: 'humidity-sensor',
                        encapsulation: core_1.ViewEncapsulation.None,
                        template: "\n    <tabs>\n        <tab title=\"Temperature\">\n            <div class=\"sensor-display--text\"> {{ temperature }}\u00B0C</div>\n        </tab>\n        <tab title=\"Humidity\">\n            <donut-chart [data]=\"humidityPercent\"></donut-chart>\n            <button (click)=\"changeHumidity()\">Change</button>\n        </tab>\n    </tabs>\n    ",
                        styles: [
                            "\n        .sensor-display--text {\n            font-size: 90px;\n            margin: 40px auto;\n            width: 200px;\n            text-align: center;\n            vertical-align: middle;\n            height: 110px;\n            overflow: hidden;\n            line-height: 1;\n        }\n\n        .donut-style {\n            width: 200px;\n            display: block;\n            margin: 0 auto;\n        }\n\n        .progress-meter .background {\n           fill: #ccc;\n        }\n\n        .progress-meter .foreground {\n            fill: steelblue;\n        }\n\n        .progress-meter text {\n            font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n            font-size: 24px;\n            font-weight: bold;\n        }\n        "
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HumiditySensorComponent);
                return HumiditySensorComponent;
            }());
            exports_1("HumiditySensorComponent", HumiditySensorComponent);
        }
    }
});
//# sourceMappingURL=humidity.component.js.map