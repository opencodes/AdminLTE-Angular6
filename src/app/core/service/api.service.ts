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

  getAPIUrl(url) {
    return this.environment.production + url;
  }

}
