import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CommonService} from '../../common.service';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private _commonSvc: CommonService, private fb: FormBuilder, private router: Router, private _authSvc: AuthService) {
  }

  ngOnInit() {
    if (this._commonSvc.login) {
      this.router.navigate(['dashboard']);
    }
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  submitLogin() {
    this._authSvc.getUserProfile().subscribe(res => {
      this._commonSvc.login = true;
      this._commonSvc.broadcast('Second value');
      this.router.navigate(['dashboard']);
    });
  }
}
