import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  serverUrl: string = 'http://localhost:4300';

  constructor(private api: HttpClient) {}
  getProperty() {
    return this.api.get(`${this.serverUrl}/get-property`);
  }
}
