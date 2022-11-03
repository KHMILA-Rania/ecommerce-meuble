import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-contenu',
  templateUrl: './contenu.component.html',
  styleUrls: ['./contenu.component.css']
})
export class ContenuComponent implements OnInit {

  name :any
  email :any
  userId:any
  msg:any
  idProduit:any
  err:any
  constructor(
    private http : HttpClient , private route: ActivatedRoute, private router: Router
  ) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('user')
  }

  envoyer(){
    
    const data = {
      name : this.name,
      email : this.email,
      message : this.msg
    }
    if(this.name == undefined || this.email == undefined || this.msg == undefined){
      this.err = 'Merci de remplir tous les chapms'
    }else{
      if(!this.userId){
        this.router.navigate(['/' , 'login'  ]);
      }else{
        this.http.post('http://localhost:3000/api/communication' , data).subscribe(res => {
          this.name = ""
          this.email =""
          this.msg = ""
        })
      }
    }

  }

  

}
