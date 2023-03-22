import { Component, OnInit } from '@angular/core';
import { AxiosResponse } from 'axios';
import axios from 'axios';

@Component({
  selector: 'app-blood-camps',
  templateUrl: './blood-camps.component.html',
  styleUrls: ['./blood-camps.component.css']
})
export class BloodCampsComponent implements OnInit {
  camps: any;

  constructor() {
  }


  // submit() {
  //   console.log('called');

  //   axios.post('http://localhost:8080/api/donars/getBloodcamps')
  //     .then((response: AxiosResponse) => {
  //       if (response.data.success) {
  //         this.posts = response.data.products;
  //         console.log(this.posts);
  //       } else {
  //         console.log(response.data)
  //         alert("Failed to get the data");
  //       }

  //     })

  // }



  ngOnInit() {
    axios.get("/api/donars/getBloodcamps")
      .then((res) => this.camps = res.data)
      .catch((err) => console.log(err))
  }

}
