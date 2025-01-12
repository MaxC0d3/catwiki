import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Breed, ObjectEntry } from 'src/app/types/api';

@Component({
    selector: 'app-Detail',
    templateUrl: './Detail.component.html',
    styleUrls: ['./Detail.component.css'],
    standalone: false
})
export class DetailComponent implements OnInit {
  data: Breed;
  id: string;
  image: string;

  constructor(
    private readonly http: ApiService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.http.getById(this.id).subscribe((entryData: ObjectEntry) => {
      this.data = entryData.breeds[0];
      this.image = entryData.url;
    });
  }
}
