import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-cataloge',
  templateUrl: './edit-cataloge.component.html',
  styleUrls: ['./edit-cataloge.component.css']
})
export class EditCatalogeComponent implements OnInit {

  name:any
  selected : any
  id:any
  cat :any

  constructor(
    private http : HttpClient , private route: ActivatedRoute, private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(res => {
      this.id = res
      this.id = this.id.id
      console.log(this.id)
      this.http.get(`http://localhost:3000/api/cataloge/${this.id}`).subscribe(res=>{
        this.cat = res
        console.log(this.cat)
        this.name = this.cat.name
        this.selected = this.cat.dans
      })
    })
  }

  modifier(){
    console.log(this.name)
    console.log(this.selected)
    const data = {
      name : this.name,
      dans : this.selected
    }
    this.http.put(`http://localhost:3000/api/cataloge/${this.id}` , data).subscribe(res=>{
      this.router.navigate(['/', 'admin' ]);
    })
    
  }
}
