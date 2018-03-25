import { Component, OnInit } from '@angular/core';
import {Sensor} from '../data/sensor/sensor';

@Component({
  selector: 'app-sensor-list',
  templateUrl: './sensor-list.component.html',
  styleUrls: ['./sensor-list.component.css']
})
export class SensorListComponent implements OnInit {

  sensors: Array<Sensor>;

  constructor() { }

  ngOnInit() {
    this.sensors = [
      new Sensor(1, 'Test1'),
      new Sensor(2, 'Test2'),
      new Sensor(3, 'Test3')
    ];
  }

}
