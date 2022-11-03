import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-ajout-client',
  templateUrl: './ajout-client.component.html',
  styleUrls: ['./ajout-client.component.css']
})
export class AjoutClientComponent implements OnInit {
  user :any

  nom : any
  prenom : any
  cin :any
  email :any
  pass :any
  nai :any
  genre : any
  username : any
  tel :any

  constructor(
    private http : HttpClient , private route: ActivatedRoute, private router: Router
  ) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.http.get('http://localhost:3000/api/auth').subscribe(res=>{
      console.log(res)
      this.user =res
      this.user = this.user.user
      console.log(this.user)
    })
  }

  ajout(){
    const user = {
      username : this.username,
      nom : this.nom,
      prenom : this.prenom,
      cin : this.cin,
      dateNaissance : this.nai,
      email : this.email,
      role : 'client' ,
      phone : this.tel,
      genre : this.genre,
      password : this.pass
    }
    this.http.post('http://localhost:3000/api/auth/register' , user , { withCredentials: true }).subscribe(res=>{
      
      this.username = ""
      this.nom = ""
      this.prenom =""
      this.cin = ""
      this.nai = ""
      this.email = ""
      
      this.tel ="",
      this.genre ="",
      this.pass =""
      this.getAll()
    })
  }

}
