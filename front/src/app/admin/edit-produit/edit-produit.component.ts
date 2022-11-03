import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit {
  name:any
  url : any
  pass : any
  seldected:any
  prix:any
  des:any
  mat:any
  lan:any
  lar:any
  cat:any
  id:any
  produit:any

  constructor(
    private http : HttpClient , private route: ActivatedRoute, private router: Router
  ) { }

  ngOnInit(): void {
    this.getAll()
    this.route.params.subscribe(res => {
      this.id = res
      this.id = this.id.id
      console.log(this.id)
      this.http.get(`http://localhost:3000/api/produit/${this.id}`).subscribe(res=>{
        this.produit = res
        console.log(this.produit)
        this.name = this.produit.name
        this.url = this.produit.url
        this.prix = this.produit.price
        this.lan = this.produit.langeur
        this.lar = this.produit.largeur
        this.mat = this.produit.matiere
        this.des = this.produit.descrption
     
      })
    })
  }

  getAll() {
    this.http.get('http://localhost:3000/api/cataloge').subscribe(res => {
      this.cat = res
    })
  }

  modifier(){

    const data = {
      name: this.name,
      price: this.prix,


      descrption: this.des,


      matiere: this.mat,


      langeur: this.lan,


      largeur: this.lar,


      url: this.url,
    }

    this.http.put(`http://localhost:3000/api/produit/${this.id}` , data).subscribe(res=>{
      this.router.navigate(['/', 'admin' , 'produit' ]);
    })
    
  }

}
