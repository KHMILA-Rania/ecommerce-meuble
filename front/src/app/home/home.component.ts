import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nav : any
  userId :any
  data:any

  constructor(
    private http : HttpClient , private route: ActivatedRoute, private router: Router
  ) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('user')
    console.log(this.userId )
    this.http.get(`http://localhost:3000/api/auth/${this.userId}`).subscribe(res=>{
      console.log(res)
      this.data = res
      if(this.data.user.role=='client'){
        this.router.navigate(['/', 'client' ]);
      }else if (this.data.user.role=='admin'){
        this.router.navigate(['/', 'admin' ]);
      }
    })
  }



}
