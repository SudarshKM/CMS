import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-components-properties',
  templateUrl: './components-properties.component.html',
  styleUrls: ['./components-properties.component.css'],
})
export class ComponentsPropertiesComponent implements OnInit {
  properties?: any;

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
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

  //for new property
  propertyData: any = {
    image: '',
    saletype: '',
    amount: '',
    address: '',
    area: '',
    beds: '',
    baths: '',
    garages: '',
  };

   //for update property
   updatePropertyData: any = {
    image: '',
    saletype: '',
    amount: '',
    address: '',
    area: '',
    beds: '',
    baths: '',
    garages: '',
  };

  constructor(private api: ApiService) {}

  addNewProperty() {
    // console.log(this.propertyData);

    this.api.addProperty(this.propertyData).subscribe({
      next: (res) => {
        console.log(res);
        alert('Property Added');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }


  //update
  openUpdateModal(item:any){
    this.updatePropertyData={
      id:item._id,
      image: item.image,
      saletype: item.saletype,
      amount: item.amount,
      address: item.address,
      area: item.area,
      beds: item.beds,
      baths: item.baths,
      garages: item.garages,
    }
  }
  update(){
console.log(this.updatePropertyData);
this.api.updateProperty(this.updatePropertyData).subscribe({
  next: (res) => {
    console.log(res);
    alert('Property Updated');
    this.refresh();
  },
  error: (err) => {
    console.log(err);
  },
})

  }

  delete(id: any) {
    this.api.deleteProperty(id).subscribe({
      next: (res) => {
        console.log(res);
        alert('Property Deleted');
        this.refresh();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
