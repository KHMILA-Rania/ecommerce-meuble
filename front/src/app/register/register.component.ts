import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  nom: any
  prenom: any
  cin: any
  email: any
  pass: any
  nai: any
  genre: any
  username: any
  tel: any
  err: any


  constructor(
    private http: HttpClient, private route: ActivatedRoute, private router: Router
  ) { }

  ngOnInit(): void {
  }

  clean() {

  }

  register() {
    const user = {
      username: this.username,
      nom: this.nom,
      prenom: this.prenom,
      cin: this.cin,
      dateNaissance: this.nai,
      email: this.email,
      role: 'client',
      phone: this.tel,
      genre: this.genre,
      password: this.pass
    }

    if (this.username == undefined || this.nom == undefined || this.prenom == undefined || this.cin == undefined || this.nai == undefined || this.tel == undefined || this.genre == undefined || this.pass == undefined) {
      this.err = "merci de remplir tous les champs"
    } else {
      this.http.post('http://localhost:3000/api/auth/register', user, { withCredentials: true }).subscribe(res => {
        this.router.navigate(['/', 'login']);
      })
    }
  }


}


