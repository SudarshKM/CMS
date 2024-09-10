import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css'],
})
export class PropertiesComponent implements OnInit {
  properties?: any;

  ngOnInit(): void {
    this.api.getProperty().subscribe({
      next: (res) => {
        // console.log(res);

        this.properties = res;
        console.log(this.properties);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  constructor(private api: ApiService) {}
}
