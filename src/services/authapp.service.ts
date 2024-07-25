import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  constructor() { }

  autentica = (userID: string, password: string) : boolean => {
    var retVal = (userID === 'Pierluigi' && password === 'Brindisi') ? true: false;

    if (retVal) {
      sessionStorage.setItem("Utente", userID)
    }
    return retVal
  }
}
