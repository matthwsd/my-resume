import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  @Input() maxValue: number = 100;
  @Input() value: number = 0;
  @Input() color: string = "#6200EE";
  @Input() backgroundColor: string = "#242424";

  constructor() { }

  ngOnInit(): void {
  }

}
