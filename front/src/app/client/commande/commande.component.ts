import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {


  data :any
  userId:any
  p:any
  idProduit:any
  constructor(
    private http : HttpClient , private route: ActivatedRoute, private router: Router
  ) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('user')
    this.getCommande()
  }

  getCommande(){
    console.log(this.userId)
    this.http.get('http://localhost:3000/api/commande/'+this.userId).subscribe(res=>{
      this.data = res
      console.log(res)
 

    })
  }

}
