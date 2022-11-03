import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data : any ;
  avatar:string ="assets/images/avatar.png";
  msg :any

  email :any;
  password :any;
  role :string = 'admin'
  a:any
  validation:boolean = false

  constructor(
    private http : HttpClient , private route: ActivatedRoute, private router: Router
  ) { }

  ngOnInit(): void {
  }

  onLogin(){
    const user = {
      email : this.email,
      password : this.password
    }
    console.log(user)
    this.http.post('http://localhost:3000/api/auth/login' , user , { withCredentials: true }).subscribe(res=>{
      this.msg = res
      if(this.msg.message=="success"){
        localStorage.setItem('user', this.msg.user._id)
        if(this.msg.user.role=='client'){
          this.router.navigate(['/', 'client' ]);
        }else if(this.msg.user.role=='admin'){
          this.router.navigate(['/', 'admin' ]);

        }
      }
    })
  }

}
