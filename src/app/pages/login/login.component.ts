import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthappService } from 'src/services/authapp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userID: string = "";
  password: string = "";

  autenticato: boolean = true;

  errorMsg: string = "Spiacente, il nome utente e/o la password sono errati";

  titolo: string = "Accedi e autenticati!";
  sottotitolo: string = "Procedi ad inserire la userid e la password";

  constructor(private route: Router, private BasicAuth: AuthappService) { }

  ngOnInit(): void {
  }

  gestAuth = (): void => {
    console.log(this.userID);

    if (this.BasicAuth.autentica(this.userID, this.password)) {
      this.route.navigate(['welcome', this.userID]);
      this.autenticato = true;
    } else {
      this.autenticato = false;
    }
  }
}
