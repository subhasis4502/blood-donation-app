import { Component } from '@angular/core';
import axios from 'axios';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-social-data',
  templateUrl: './social-data.component.html',
  styleUrls: ['./social-data.component.css']
})

export class SocialDataComponent {

  socialData: any;
  data: any;
  bloodBanks: any;


  async sendMessage(request: any) {
    console.log('Sending message...');
    // Getting the address of the request
    await axios.post('/api/socialdata/getAddress', {
      hospitalName: request.Location,
    }).then((response) => {
      this.data = response.data;
    });

    //Preparing blood type
    let bloodGroup = request.Blood_Type;
    let bloodType = bloodGroup.substring(0, bloodGroup.length - 1) + '_' + (bloodGroup.charAt(bloodGroup.length - 1) === '+' ? 'pos' : 'neg');
    // console.log(bloodType);

    // Checking the available blood
    // 1. For complete availablity
    await axios.post('/api/bloodbanks/getCompleteAvailBlood', {
      "city": this.data.city,
      "state": this.data.state,
      "type": bloodType,
      "quantity": request.Blood_Requirement.substring(0, request.Blood_Requirement.length - 2),
      "lattitude": this.data.lattitude,
      "longitude": this.data.longitude,
    }).then((result) => {
      // console.log(result.data);
      this.bloodBanks = result.data;
    })

    // 2. For partial availablity
    if (this.bloodBanks.length === 0) {
      await axios.post('/api/bloodbanks/getPartialAvailBlood', {
        "city": this.data.city,
        "state": this.data.state,
        "type": bloodType,
        "lattitude": this.data.lattitude,
        "longitude": this.data.longitude,
      }).then((result) => {
        this.bloodBanks = result.data;
      })
    }
    // console.log(this.bloodBanks);
    // Sending message and update the database
    let message;
    // Preparing the message
    // Blood found
    if (this.bloodBanks.length > 0) {
      message = `Nearest Blood availablity locations against your request as of ${new Date().toString().substring(0, new Date().toString().indexOf('GMT'))}:\n`
      let i = 1;
      for (const bloodBank of this.bloodBanks) {
        const id = bloodBank["S.No."];
        const name = bloodBank["Blood Bank Name"];
        const address = bloodBank["Address"];
        const availQnty = bloodBank[bloodType];
        const distance = bloodBank["distance"];
        message += `${i}. Blood Bank Name: ${name}, Address: ${address}, Available Quantity: ${availQnty}ml, Distance: ${distance} km\n`;
        i++;
      }
    }
    // Blood not found
    else {
      message = `We're sorry, but no ${bloodGroup} blood is currently unavailable in your area.`;
    }
    console.log(message);
    console.log(request);
    // Updating database
    // axios.put('/api/socialdata/setMessage', { id: request.id });
    console.log('Message sent successfully');
    // Sending email
    emailjs.send("service_r19lvsr", "template_o7iob17", {
      "email_id": request.Email_Id,
      "message": message,
      "to_name": request.Name,
    }, "Q3pIrEvqOLa9Hj3h6")
      .then((response: any) => {
        console.log("SUCCESS", response);
        alert("Email Sent");
      }, (error: any) => {
        console.log("FAILED", error);
      });


    axios.get('/api/socialdata/')
      .then(response => {
        this.socialData = response.data;
      })
      .catch(error => {
        console.log(error);
      });

  }



  constructor() { }

  ngOnInit(): void {
    axios.get('/api/socialdata/')
      .then(response => {
        this.socialData = response.data;
        console.log(response.data.name);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
