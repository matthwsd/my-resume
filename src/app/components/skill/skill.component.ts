import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  @Input() value: number = 0;
  @Input() title!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
