import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TabsComponent } from "../../common/tabs/tabs.component";

@Component({
  selector: 'app-post-api',
  imports: [FormsModule, TabsComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit, AfterViewInit {

  currentTab: string = '';
  carList: any[] =[]
  carObj: any = {
    "carId": 0,
    "brand": "",
    "model": "",
    "year": "",
    "color": "",
    "dailyRate": "",
    "carImage": "",
    "regNo": ""
  }
  http = inject(HttpClient);

  onTabChange(tabName: string){
    this.currentTab = tabName;
  }

  ngOnInit(): void {
    console.log('ngOnInit is called');
    this.getAllCarList();
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit is called', performance.now());
  }

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

  onEdit(data: any){
    this.carObj = data;
  }

  updateCar(){
    this.http.put("https://freeapi.miniprojectideas.com/api/CarRentalApp/UpdateCar", this.carObj).subscribe((res:any) => {
      if(res.result){
        alert("Car Update Successfully");
        this.getAllCarList();
      }else{
        alert(res.message);
      }
    })
  }
  onDelete(id: number){
    const wantToDelete = confirm("Are you sure to delete this data?");
   // debugger;
    if(wantToDelete == true){
        this.http.delete("https://freeapi.miniprojectideas.com/api/CarRentalApp/DeleteCarbyCarId?carid=" + id).subscribe((res:any) => {
          if(res.result){
            alert("Car deteled Successfully");
            this.getAllCarList();
          }else{
            alert(res.message);
          }
        })
    }
    
  }

}
