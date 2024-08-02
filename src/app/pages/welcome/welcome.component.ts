import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalutiDataService } from 'src/app/core/services/saluti-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  utente: string = "";

  titolo: string = "Benvenuto in Lezione Angular";
  sottotitolo: string = "Procedi ad inserire la userid e la password";

  constructor(private route: ActivatedRoute, private salutiSrv: SalutiDataService) { }

  ngOnInit(): void {
    this.utente = this.route.snapshot.params['userID']
  }

  getSaluti = () : void => console.log(this.salutiSrv.getSaluti());

}
