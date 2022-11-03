import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-navbar-client',
  templateUrl: './navbar-client.component.html',
  styleUrls: ['./navbar-client.component.css']
})
export class NavbarClientComponent implements OnInit {
  nbPanier :any
  id:any
  constructor(
    private http : HttpClient , private route: ActivatedRoute, private router: Router
  ) { }

  ngOnInit(): void {
    this.nbPanier = localStorage.getItem('p')
    this.id = localStorage.getItem('user')
  }

  logout(){
    this.http.post('http://localhost:3000/api/auth/logout' , null , { withCredentials: true }).subscribe(res=>{
      localStorage.clear();
      this.router.navigate(['/' ]);
    })
  }

  panier(){
    this.router.navigate(['/' , 'client' , 'panier' ]);
  }

  cmd(){
    this.router.navigate(['/' , 'client' , 'commande' , `${this.id}` ]);
  }

}
