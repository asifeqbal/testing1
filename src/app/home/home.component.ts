import { Component, OnInit } from '@angular/core';
import { CityService} from '../city.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private cityservice:CityService) { }

  onSelect(a){
    this.router.navigate(['city',a]);
    console.log('value'+a);
  }

  ngOnInit() {
  }

}
