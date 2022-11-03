import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private http : HttpClient , private route: ActivatedRoute, private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['/', 'login']);
  }

  register(){
    this.router.navigate(['/', 'register']);
  }

  home(){
    this.router.navigate(['/', 'home']);

  }

  

}
