
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import axios from 'axios';
import { AxiosResponse } from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null,[Validators.required]),
    email: new FormControl(null,[Validators.email,Validators.required]),
    password: new FormControl(null,[Validators.required]),
    cpass: new FormControl(null,[Validators.required])
  })

  constructor(private _router: Router) { }
  register(){
    if(!this.registerForm.valid || this.registerForm.controls['password'].value != this.registerForm.controls['cpass'].value){
      console.log('Invalid Details');
      return;
    }
    const variables = {
      Name: this.registerForm.controls['name'].value,
      email: this.registerForm.controls['email'].value,
      password: this.registerForm.controls['password'].value,
    }
    axios.post('http://localhost:8080/api/donars/register',variables)
    .then((response:AxiosResponse)=>{
      if (response.data.success) {
        
        alert("Registered successfully");
        this._router.navigate(['/login']);
      } else {
        alert("Failed to register");
      }
        
    })
  }
  ngOnInit(): void {
  }

}
