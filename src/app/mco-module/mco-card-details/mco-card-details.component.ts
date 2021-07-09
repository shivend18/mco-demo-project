import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mco-card-details',
  templateUrl: './mco-card-details.component.html',
  styleUrls: ['./mco-card-details.component.scss']
})
export class McoCardDetailsComponent implements OnInit {
  @Input() selectedList: any[];

  title = 'Weeks of membership';
  type = 'ColumnChart';
  data = [
    ['1 week', 225],
    ['2 week', 375],
    ['3 week', 550],
    ['4 week', 750],
    ['5 week', 940]
  ];
  columnNames = ['No. of Posts', 'membership'];
  options = {};
  width = 350;
  height = 174;
  constructor() { }

  ngOnInit(): void {
  }

}
