import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from './api.service';
import {Urls} from '../interface/urls';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private _apiSvc: ApiService) {
  }

  getUserProfile() {
    return this.http.get(this._apiSvc.getAPIUrl(Urls.USER_PROFILE));
  }

  getNotification() {
    return this.http.get(this._apiSvc.getAPIUrl(Urls.USER_PROFILE));
  }

}
