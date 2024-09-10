import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-components-properties',
  templateUrl: './components-properties.component.html',
  styleUrls: ['./components-properties.component.css']
})
export class ComponentsPropertiesComponent implements OnInit {

properties?:any

ngOnInit(): void {
  this.api.getProperty().subscribe({
    next:(res)=>{
      // console.log(res);
      this.properties = res

      console.log(this.properties);
      
      
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}

//for new property
  propertyData:any={
    image:'',
    saletype:'',
    amount:'',
    address:'',
    area:'',
    beds:'',
    baths:'',
    garages:''
  }

constructor(private api:ApiService){}



addNewProperty(){

  // console.log(this.propertyData);
  
  this.api.addProperty(this.propertyData).subscribe({
    next:(res)=>{
      console.log(res);
      alert("Property Added")
      
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}

}
