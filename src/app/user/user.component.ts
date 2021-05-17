import { Component, OnInit } from '@angular/core';
import { MediatorService } from '../common/mediator-service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  open:boolean=false;
  tiles:boolean=false;
  constructor(private mService:MediatorService) { }

  ngOnInit(): void {
  }
  viewSet(view:boolean){
    this.mService.tileView.next(view)
    this.tiles=view?true:false

  }

  show_overlay(){
    this.open=!this.open
    this.mService.overlay.next(this.open);
  }
}
