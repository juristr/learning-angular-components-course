import {Component, OnInit} from '@angular/core';

import { Sensor, SensorService } from '../core/sensors.service';

import { ModalComponent } from '../modal/modal.component';

@Component({
    selector: 'configure',
    templateUrl: 'app/sensor-config/sensor-config.html'
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

    addToDashboard(sensor: Sensor) {
        this.sensorService.addToDashboard(sensor);
    }

    selectSensor(sensor: Sensor, modal: ModalComponent) {
        this.sensorModel = {
            name: sensor.name,
            description: sensor.description,
            type: sensor.type
        };
        modal.open();
    }

 }
