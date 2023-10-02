import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ObjectEntry } from 'src/app/types/api';

@Component({
  selector: 'app-Detail',
  templateUrl: './Detail.component.html',

  styleUrls: ['./Detail.component.css'],
})
export class DetailComponent implements OnInit {
  text: string = 'Alert, Agile, Energetic, Demanding, Intelligent';

  private data: ObjectEntry = {};
  private id: string = '';

  constructor(
    private readonly http: ApiService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.http.get(this.id).subscribe((entryData) => (this.data = entryData));
  }
}
