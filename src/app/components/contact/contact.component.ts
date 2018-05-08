import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  sideNavBtn: any;

  constructor() { }

  ngOnInit() {
    this.sideNavBtn   = document.getElementById('sideNavBtn');
    this.sideNavBtn.setAttribute("class", "navOpenBtnLight");
  }

}
