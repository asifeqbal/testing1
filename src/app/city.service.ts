import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityService {
 

  constructor() { }
  cities = [
    { 
      id:1,
      city: 'Banglore', 
      state: 'karnatka', 
      language:'kanada',
      desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
      img:'https://i0.wp.com/www.quicksearchs.in/wp-content/uploads/2014/07/HNI-Database-Bangalore.png'       
    },
    { 
      id:2,
      city: 'Chennai', 
      state: 'Tamil Nadu', 
      language:'tamil',
      desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',   
      img:'http://www.tesolcourseindia.com/images/chennai.jpg'    
    },
    { 
      id:3,
      city: 'Kolkata', 
      state: 'West Bengal', 
      language:'Bengali',
      desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
      img:'https://www.visiit.com/uatres/images/package/PK00000439/tile/kolkatta-trip-visiit.jpg'       
    }    
    
  ];



}
