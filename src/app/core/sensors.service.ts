import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

export interface Sensor {
    name: string,
    description: string,
    type: string
}

@Injectable()
export class SensorService {
    private dashboardSensors: Sensor[] = [];

    constructor(private http: Http) {
    }

    discoverSensors() : Observable<any> {
        return this.http
            .get('/assets/data/newsensors.json')
            .map(res => res.json());
    }

    addToDashboard(sensor: Sensor) {
        this.dashboardSensors.push(sensor);
    }

    getDashboardSensors(): Sensor[] {
        return this.dashboardSensors;
    }

}
