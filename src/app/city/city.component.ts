import { Component, OnInit } from '@angular/core';
import { CityService} from '../city.service';
import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  constructor(private router:Router,private cityservice:CityService,private route:ActivatedRoute) { }
  pid:number;
  private sub:any;
  city=this.cityservice.cities;
  currentcity:any;

  ngOnInit() {
  this.sub= this.route.params.subscribe(params =>{
        this.pid = +params['id'];
        this.city.forEach((x)=>{
          if(x.id==this.pid){
            this.currentcity = x
          }        
        })
        // const myObjStr = JSON.stringify(this.city);
        // console.log(myObjStr);          
      })

 
  }

}
