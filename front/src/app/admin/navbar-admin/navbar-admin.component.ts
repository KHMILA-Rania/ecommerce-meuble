import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {

  constructor(
    private http : HttpClient , private route: ActivatedRoute, private router: Router
  ) { }

  ngOnInit(): void {
  }

  cat(){
    console.log('aa')
    this.router.navigate(['/', 'admin' , 'cataloge' ]);
  }
  cl(){
    this.router.navigate(['/', 'admin' , 'client']);
  }
  pr(){
    this.router.navigate(['/', 'admin' , 'produit' ]);
  }

  cm(){
    this.router.navigate(['/', 'admin' , 'communication' ]);
  }

  logout(){
    this.http.post('http://localhost:3000/api/auth/logout' , null , { withCredentials: true }).subscribe(res=>{
      localStorage.clear();
      this.router.navigate(['/' ]);
    })
  }

  home(){
    this.router.navigate(['/', 'home']);

  }

}
