import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../@configs/env';
import { ObjectEntry } from '../types/api';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private readonly http: HttpClient) {}

  public get(id: string): Observable<ObjectEntry> {
    return this.http.get(`${Config.API}/${id}`);
  }
}
