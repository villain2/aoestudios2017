import {Component, Input, OnInit, ViewChild, ElementRef} from '@angular/core';
import { MnFullpageOptions  } from 'ng2-fullpage';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
  @Input() public options: MnFullpageOptions = new MnFullpageOptions({
    scrollBar: true,
    keyboardScrolling: true,
    navigation: true,
    slidesNavigation: true,
    recordHistory: true
  });

  currentPageID;
  pageHeight: number;
  currentScrollNumber: number;
  divID: number;
  sideNavBtn: any;

  constructor() {
  }

  @ViewChild('fullPage') input: ElementRef;

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);
  }

  ngAfterViewInit()
  {
    // console.log(this.input.nativeElement);
    this.currentPageID     = this.input.nativeElement;
    this.currentPageID.removeAttribute("mnfullpage");
    this.sideNavBtn   = document.getElementById('sideNavBtn');
    this.sideNavBtn.setAttribute("class", "navOpenBtnLight");
  }

  scroll = (): void => {
    // what is the scroll height of the entire window?
    this.pageHeight           = window.innerHeight;
    this.currentScrollNumber  = window.scrollY;
    this.divID                = Math.round(this.currentScrollNumber / this.pageHeight);
    console.log(this.divID);

    // switch color of side nav bar
    switch (this.divID)
    {

      case 0:
      case 2:
        this.sideNavBtn.setAttribute("class", "navOpenBtnLight");
        break;

      default:
        this.sideNavBtn.setAttribute("class", "navOpenBtn");
        break;
    }
  };
}
