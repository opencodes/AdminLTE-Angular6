import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CommonService} from '../../common.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private _commonSvc: CommonService, private fb: FormBuilder, private router: Router) {
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
    this._commonSvc.login = true;
    this._commonSvc.broadcast('Second value');
    this.router.navigate(['dashboard']);
  }
}
