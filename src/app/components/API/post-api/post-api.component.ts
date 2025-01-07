import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent {

  carList: any[] =[]
  carObj: any = {
    "CarId": 0,
    "Brand": "",
    "Model": "",
    "Year": "",
    "Color": "",
    "DailyRate": "",
    "CarImage": "",
    "RegNo": ""
  }
  http = inject(HttpClient);

  getAllCarList(){
    this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars").subscribe((res:any) =>{
      this.carList = res.data;
    })
  }

  saveNewCar(){
    this.http.post("https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCar", this.carObj).subscribe((res:any) => {
     // debugger;
      if(res.result){
        alert("Car Added Successfully");
        this.getAllCarList();
      }else{
        alert(res.message);
      }
    })
  }


}
