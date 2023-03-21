import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import axios from 'axios';
import { AxiosResponse } from 'axios';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    
    email: new FormControl(null,[Validators.email,Validators.required]),
    password: new FormControl(null,[Validators.required]),
   
  })

  constructor(private _router: Router) {}
  login(){
    if(!this.loginForm.valid ){
      console.log('Invalid Details');
      return;
    }
    const variables = {
      email: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value,
    }
    console.log(variables);
    axios.post('/api/donars/login',variables)
    .then((response:AxiosResponse)=>{
      if (response.data.loginSuccess) {
        
        alert("Login successfully");
        this._router.navigate(['/']);
      } else {
        alert("Failed to Login");
      }
      
    })
    
  }
  ngOnInit(): void {
  }

}
