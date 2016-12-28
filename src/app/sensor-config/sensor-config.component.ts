import {Component, OnInit} from '@angular/core';

import { Sensor, SensorService } from '../core/sensors.service';

@Component({
    selector: 'configure',
    templateUrl: 'sensor-config.html'
})

export class SensorConfigureComponent implements OnInit {
    private sensors: Sensor[] = [];
    private configuredSensors: Sensor[];
    private sensorModel: Sensor;

    constructor(private sensorService: SensorService ) {
    }

    ngOnInit() {
        this.refreshSensors();
        this.configuredSensors = this.sensorService.getDashboardSensors();
    }

    refreshSensors() {
        this.sensorService.discoverSensors()
            .subscribe(data => {
                this.sensors = data;
            });
    }

    selectSensor(sensor:Sensor, modal) {
        // assign a copy of the sensor
        this.sensorModel = {
            name: sensor.name,
            description: sensor.description,
            type: sensor.type
        };
        modal.open();
    }

    addToDashboard(sensor: Sensor) {
        this.sensorService.addToDashboard(sensor);
    }

 }
