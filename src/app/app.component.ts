import {Component, OnChanges, OnInit} from '@angular/core';
import {CommonService} from './common.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'AAdminLTE-Angular6';
  isLogin = false;

  constructor(private _commonSvc: CommonService, private router: Router) {

  }

  ngOnInit() {
    // this.isLogin = this._commonSvc.login;
    this._commonSvc.subject.subscribe(res => {
      if (res) {
        this.isLogin = true;
      }
    });
  }

  ngOnChanges() {
    this.isLogin = this._commonSvc.login;
  }
}
