import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.component.html',
  styleUrls: ['./home-client.component.css']
})
export class HomeClientComponent implements OnInit {
  data :any
  userId:any
  
  constructor(
    private http : HttpClient , private route: ActivatedRoute, private router: Router
  ) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('user')
    this.getPanier()
  }

  
  getPanier(){
    console.log(this.userId)
    this.http.get('http://localhost:3000/api/panier/'+this.userId).subscribe(res=>{
      this.data = res
      console.log("rrrrrrrr",this.data.length)
      localStorage.setItem('p', this.data.length)
    })
  }

}
