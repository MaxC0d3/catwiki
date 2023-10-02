import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Detail',
  templateUrl: './Detail.component.html',

  styleUrls: ['./Detail.component.css']
})
export class DetailComponent implements OnInit { 

  text: string ="Alert, Agile, Energetic, Demanding, Intelligent"

  constructor() { }

  ngOnInit() {
  }

}
