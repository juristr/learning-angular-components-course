System.register(['@angular/core', '../core/sensors.service'], function(exports_1, context_1) {
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
    var core_1, sensors_service_1;
    var SensorConfigureComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sensors_service_1_1) {
                sensors_service_1 = sensors_service_1_1;
            }],
        execute: function() {
            SensorConfigureComponent = (function () {
                function SensorConfigureComponent(sensorService) {
                    this.sensorService = sensorService;
                    this.sensors = [];
                }
                SensorConfigureComponent.prototype.ngOnInit = function () {
                    this.refreshSensors();
                    this.configuredSensors = this.sensorService.getDashboardSensors();
                };
                SensorConfigureComponent.prototype.refreshSensors = function () {
                    var _this = this;
                    this.sensorService.discoverSensors()
                        .subscribe(function (data) {
                        _this.sensors = data;
                    });
                };
                SensorConfigureComponent.prototype.selectSensor = function (sensor, modal) {
                    // assign a copy of the sensor
                    this.sensorModel = {
                        name: sensor.name,
                        description: sensor.description,
                        type: sensor.type
                    };
                    modal.open();
                };
                SensorConfigureComponent.prototype.addToDashboard = function (sensor) {
                    this.sensorService.addToDashboard(sensor);
                };
                SensorConfigureComponent = __decorate([
                    core_1.Component({
                        selector: 'configure',
                        templateUrl: 'app/sensor-config/sensor-config.html'
                    }), 
                    __metadata('design:paramtypes', [sensors_service_1.SensorService])
                ], SensorConfigureComponent);
                return SensorConfigureComponent;
            }());
            exports_1("SensorConfigureComponent", SensorConfigureComponent);
        }
    }
});
//# sourceMappingURL=sensor-config.component.js.map