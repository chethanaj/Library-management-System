import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router'
import {AuthService} from "../services/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {


  
  loginUserData ={username:"",password:""}


  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }

  loginUser () {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        
        localStorage.setItem('token', res.accessToken)
        this._router.navigate(['/home'])
      },
      err => console.log(err)
    ) 
  }

}
