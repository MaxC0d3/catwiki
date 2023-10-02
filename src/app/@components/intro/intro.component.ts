import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
})
export class IntroComponent implements OnInit {
  data: any;

  constructor(private readonly http: ApiService) {}

  ngOnInit() {
    this.http.getAllBreeds(10).subscribe((data) => {
      this.data = data;
    });
  }
}
