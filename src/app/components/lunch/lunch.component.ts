import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.scss']
})
export class LunchComponent implements OnInit {
  navbarPadre = 'mensaje desde el padre';
  constructor() { }

  ngOnInit(): void {
  }

}