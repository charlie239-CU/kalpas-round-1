import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataModel } from 'src/app/data.model';

@Component({
  selector: 'app-news-box',
  templateUrl: './news-box.component.html',
  styleUrls: ['./news-box.component.css']
})
export class NewsBoxComponent implements OnInit {
@Input('info') info:DataModel
@Output('close') close=new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }

  onClose(event){
    //console.log(event)
    this.close.emit(this.info.id)
  }
}
