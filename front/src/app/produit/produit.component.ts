import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {


  nbr : any = 1
  id:any
  produit:any
  userId :any
  p:any
  constructor(
    private http : HttpClient , private route: ActivatedRoute, private router: Router
  ) { }

  ngOnInit(): void {
    this.getAll()
    this.userId = localStorage.getItem('user')
    this.p = localStorage.getItem('p')
    
  }

  getAll(){
    this.route.params.subscribe(res => {
      this.id = res
      this.id = this.id.id
      this.http.get(`http://localhost:3000/api/produit/${this.id}`).subscribe(res=>{
        this.produit =res
        console.log(this.produit)
      })
    })

  }

  ajout(){
    console.log(this.nbr)
    console.log(this.id)
    console.log(this.userId)

    if(this.userId == null){
      this.router.navigate(['/', 'login' ]);
    }else{
      const data = {
        idClient : this.userId,
        idProduit : this.id,
        nb : this.nbr
      }
      this.http.post('http://localhost:3000/api/panier' , data).subscribe(res=>{
        this.p = Number(this.p)+1
        localStorage.removeItem('p');
        localStorage.setItem('p', this.p)
        this.router.navigate(['/', 'client' , 'panier' ]);
      })
    }

  }

}
