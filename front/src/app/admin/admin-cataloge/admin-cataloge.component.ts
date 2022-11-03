import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-admin-cataloge',
  templateUrl: './admin-cataloge.component.html',
  styleUrls: ['./admin-cataloge.component.css']
})
export class AdminCatalogeComponent implements OnInit {

  selected:any
  name:any
  cat:any

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

  ajout(){
    const data = {
      name : this.name,
      dans : this.selected
    }
    this.http.post('http://localhost:3000/api/cataloge' , data).subscribe(res=>{
      console.log(res)
      this.name = ""
      this.selected = ""
      this.getAll()

    })
  }

  edit(id:any){
    this.router.navigate(['/', 'admin' , 'cataloge' , `${id}`]);
  }

  delete(id:any){
    this.http.delete(`http://localhost:3000/api/cataloge/${id}`).subscribe(res=>{
      this.getAll()
    })
  }

}
