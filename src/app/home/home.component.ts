import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  statesArr = [{
      state: "West Bengal",
      districts: [
        "Alipurduar",
        "Bankura",
        "Birbhum",
        "Burdwan (Bardhaman)",
        "Cooch Behar",
        "Dakshin Dinajpur (South Dinajpur)",
        "Darjeeling",
        "Hooghly",
        "Howrah",
        "Jalpaiguri",
        "Kalimpong",
        "Kolkata",
        "Malda",
        "Murshidabad",
        "Nadia",
        "North 24 Parganas",
        "Paschim Medinipur (West Medinipur)",
        "Purba Medinipur (East Medinipur)",
        "Purulia",
        "South 24 Parganas",
        "Uttar Dinajpur (North Dinajpur)",
      ],
    },];
  cities: any;
  selectedState: any;
  selectedCity: any;

  citiesArr: string[] = [];

  onStateSelect(stateName: string) {
    this.selectedState = stateName;
    const selectedState = this.statesArr.find(state => state.state === stateName);
    if (selectedState) {
      this.citiesArr = selectedState.districts;
    } else {
      this.citiesArr = []; // Clear the cities array if no state is selected
    }
  }

  onCitySelect(cityName: string) {
    this.selectedCity = cityName;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
