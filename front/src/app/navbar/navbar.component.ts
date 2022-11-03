import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  nav :any
  cat:any = []
  data = []
  constructor(
    private http : HttpClient , private route: ActivatedRoute, private router: Router
  ) { }

  ngOnInit(): void {
   
    this.getAll()
  }

  getAll(){
    this.http.get('http://localhost:3000/api/cataloge').subscribe(res=>{
      this.cat = res
      console.log(this.cat)
    })
  }

  clik(id:any){
    console.log(id)
    this.router.navigate(['/', 'cataloge' , `${id}`]);
  }



}
