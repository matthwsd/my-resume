import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-under',
  templateUrl: './under.component.html',
  styleUrls: ['./under.component.scss']
})
export class UnderComponent implements OnInit {

  @Input() text?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
