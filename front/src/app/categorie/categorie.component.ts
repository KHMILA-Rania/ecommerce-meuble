import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  id:any
  produit:any
  userId:any
  constructor(
    private http : HttpClient , private route: ActivatedRoute, private router: Router
  ) { }

  ngOnInit(): void {
    this.getAll()
    this.userId = localStorage.getItem('user')

  }

  getAll(){
    this.route.params.subscribe(res => {
      this.id = res
      this.id = this.id.id
      this.http.get(`http://localhost:3000/api/produit/byCat/${this.id}`).subscribe(res=>{
        this.produit =res
      })
    })
  }

  nav(id:any){
    console.log(id)
    this.router.navigate(['/', 'produit' , `${id}`]);
  }

}
