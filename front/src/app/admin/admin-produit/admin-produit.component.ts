import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-admin-produit',
  templateUrl: './admin-produit.component.html',
  styleUrls: ['./admin-produit.component.css']
})
export class AdminProduitComponent implements OnInit {
  cat: any
  seldected: any
  name: any
  lan: any
  lar: any
  des: any
  url: any
  mat: any
  prix: any
  produit: any

  constructor(
    private http : HttpClient , private route: ActivatedRoute, private router: Router
  ) { }

  ngOnInit(): void {
    this.getAll()
    this.getAllProduit()


  }

  getAllProduit() {
    this.http.get('http://localhost:3000/api/produit').subscribe(res => {
      this.produit = res
      console.log(this.produit)
    })
  }

  getAll() {
    this.http.get('http://localhost:3000/api/cataloge').subscribe(res => {
      this.cat = res
    })
  }

  ajout() {
    const data = {
      name: this.name,
      price: this.prix,


      descrption: this.des,


      matiere: this.mat,


      langeur: this.lan,


      largeur: this.lar,


      url: '../../assets/images/'+this.url,


      idCataloge: this.seldected


    }

    console.log(data)
    this.http.post('http://localhost:3000/api/produit', data).subscribe(res => {
      console.log(res)
      this.name = ""
      this.prix = ""
      this.des = ""
      this.mat = ""
      this.lan = ""
      this.lar = ""
      this.url = ""
      this.seldected = ""
      this.getAll()
      this.getAllProduit()
    })
  }



  edit(id:any){
    console.log(id)
    this.router.navigate(['/', 'admin' , 'produit' , `${id}`]);
  }

  delete(id:any){
    this.http.delete(`http://localhost:3000/api/produit/${id}`).subscribe(res=>{
      this.getAll()
      this.getAllProduit()
    })
  }

}
