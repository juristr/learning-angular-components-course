import {Component, OnInit} from '@angular/core';

import { Sensor, SensorService } from '../core/sensors.service';

@Component({
    selector: 'configure',
    templateUrl: 'app/sensor-config/sensor-config.html'
})

export class SensorConfigureComponent implements OnInit {
    private sensors: Sensor[] = [];
    private configuredSensors: Sensor[];

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

    addToDashboard(sensor: Sensor) {
        console.log('adding sensor', sensor);
        this.sensorService.addToDashboard(sensor);
    }

 }
