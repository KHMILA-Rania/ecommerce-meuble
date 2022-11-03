import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  data :any
  userId:any
  p:any
  idProduit:any
  constructor(
    private http : HttpClient , private route: ActivatedRoute, private router: Router
  ) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('user')
    this.p = localStorage.getItem('p')
    this.getPanier()
   
  }

  getPanier(){
    console.log(this.userId)
    this.http.get('http://localhost:3000/api/panier/'+this.userId).subscribe(res=>{
      this.data = res
      console.log(this.data.length)
      localStorage.removeItem('p');
      localStorage.setItem('p', this.data.length)

    })
  }

  cancel(id :any){
    this.http.delete('http://localhost:3000/api/panier/'+id).subscribe(res=>{
      this.p = Number(this.p)-1
        localStorage.removeItem('p');
        localStorage.setItem('p', this.p)
        window.location.reload();
    })
  }

  commander(){
    for(var i=0 ; i<this.data.length ; i++){
      console.log(this.data[i].produit._id)
      console.log('aaaaaaaaa',this.data[i].panier._id)
      const data2 = {
        idDeClinet : this.userId,
        nobmbre : this.data[i].panier.nb,
        idProduit : this.data[i].produit._id
      }
      this.http.post('http://localhost:3000/api/commande' , data2).subscribe(res=>{
        this.idProduit = res
        // console.log('aefhbze',this.data[i].panier)
        //
      })
      this.cancel(this.data[i].panier._id)
    }
  }

}
