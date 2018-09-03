import {Injectable} from '@angular/core';
import {Urls} from '../interface/urls';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private environment = environment;

  constructor() {
  }

  getAPIUrl() {
    return this.environment.production + Urls.USER_PROFILE;
  }

}
