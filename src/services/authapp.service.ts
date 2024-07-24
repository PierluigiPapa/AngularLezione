import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  constructor() { }

  autentica = (userID: string, password: string) : boolean => {
    return (userID === 'Pierluigi' && password === 'Brindisi') ? true: false;
  }
}
