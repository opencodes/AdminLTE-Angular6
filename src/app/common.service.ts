import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  subject = new Subject < string >();


  private _login;

  constructor() {

  }

  get login() {
    return this._login;
  }

  set login(value) {
    this._login = value;
  }

  broadcast(data) {
    this.subject.next(data);
  }

}
