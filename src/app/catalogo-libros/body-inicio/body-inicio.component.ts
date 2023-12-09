import { Component, OnInit } from '@angular/core';
import {Implement} from "@angular/cli/lib/config/workspace-schema";
import {SharedService} from "../../Services/shared.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-body-inicio',
  templateUrl: './body-inicio.component.html',
  styleUrls: ['./body-inicio.component.css']
})
export class BodyInicioComponent implements OnInit{

  constructor(private sharedService:SharedService,  private router: Router) {
  }

  public id:string= ""
  public password:string= ""

  ngOnInit() {
    this.id=this.sharedService.getId();
    this.password=this.sharedService.getPassword();
  }

  entrar(){
    if(this.id=="000242458"){
      this.router.navigate(['/gestionar/librosSolicitados']);
    }
    if(this.id=="000231478"){
      this.router.navigate(['/catalogoLector']);
    }
  }

}
