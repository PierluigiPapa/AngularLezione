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

  loggedUser = () : string | null => (sessionStorage.getItem("Utente")) ? sessionStorage.getItem("Utente") : "";

  isLogged = () : boolean => (sessionStorage.getItem("Utente")) ? true : false;

  clearUser = (): void => sessionStorage.removeItem("Utente");

  clearAll = (): void => sessionStorage.clear();
}
