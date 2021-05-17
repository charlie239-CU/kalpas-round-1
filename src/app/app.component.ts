import { Component, OnInit } from '@angular/core';
import { MediatorService } from './common/mediator-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Project';
  overlay:boolean=false;
  isMenuCollapsed:boolean=false;
  constructor(private mService:MediatorService ){}
  ngOnInit(){
    this.mService.overlay.subscribe((data:boolean)=>{
      this.overlay=data;

    })
  }
}
