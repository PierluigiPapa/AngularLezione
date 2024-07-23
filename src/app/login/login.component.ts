import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userID: string = "Pierluigi";
  password: string = "";

  autenticato: boolean = true;

  errorMsg: string = "Spiacente, il nome utente e/o la password sono errati";

  titolo: string = "Accedi e autenticati!";
  sottotitolo: string = "Procedi ad inserire la userid e la password";

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  gestAuth = (): void => {
    console.log(this.userID);

    if (this.userID === "Pierluigi" && this.password === "Brindisi") {
      this.route.navigate(['welcome', this.userID]);
      this.autenticato = true;
    } else {
      this.autenticato = false;
    }
  }
}
