import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MediatorService } from 'src/app/common/mediator-service';
import { DataModel } from 'src/app/data.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  @Input('info') info:DataModel;
  @Output('close') close=new EventEmitter<number>()
 tiles:boolean;
  constructor(private mService : MediatorService) {
    this.mService.tileView.subscribe((data:boolean)=>{

      this.tiles=data
      console.log(data)
    })
   }

  ngOnInit(): void {

  }
  onClose(){
    this.close.emit(this.info.id)
  }
}
