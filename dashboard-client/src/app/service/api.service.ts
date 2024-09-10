import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  serverUrl: string = 'http://localhost:4300';

  constructor(private api: HttpClient) {}

  addProperty(reqBody: any) {
    return this.api.post(`${this.serverUrl}/add-property`, reqBody);
  }

  getProperty(){
    return this.api.get(`${this.serverUrl}/get-property`)
  }

  deleteProperty(reqBody:any){
    return this.api.delete(`${this.serverUrl}/update-property` , reqBody)
  }
}
