import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private _apiSvc: ApiService) {
  }

  getUserProfile() {
    return this.http.get(this._apiSvc.getAPIUrl());
  }

}
