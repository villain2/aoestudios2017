import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.scss']
})
export class CreatorsComponent implements OnInit {
  sideNavBtn: any;

  constructor() { }

  ngOnInit() {
    this.sideNavBtn   = document.getElementById('sideNavBtn');
    this.sideNavBtn.setAttribute("class", "navOpenBtnLight");
  }

}
