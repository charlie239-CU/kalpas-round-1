import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MediatorService } from '../common/mediator-service';
import { DataModel } from '../data.model';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  overlay:boolean=false;
  filter:string="blur(0px)"
  data:number[]
  totalLength:any;
  page:number=1;

  tiles:boolean=true;
  fetchedData:any
  newsData:DataModel[]
  signUpForm:FormGroup
  constructor(private mService:MediatorService) {
    this.data=[1,2,3,4,5,6]
    console.log("news"+this.tiles)

   }

  ngOnInit(): void {
    this.signUpForm=new FormGroup({
      'name':new FormGroup({
        'fname':new FormControl(null,[Validators.required]),
        'lname':new FormControl(null,[Validators.required])
      }),
      'address':new FormControl(null,Validators.required),
      'country':new FormControl(null,Validators.required),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'phone':new FormControl(null,[Validators.required,Validators.maxLength(10)])
    })

    this.mService.tileView.subscribe((data:boolean)=>{
      this.tiles=data;
      console.log("subs in news"+data)
    })
    this.mService.overlay.subscribe((data:boolean)=>{
      this.overlay=data;
      this.filter=data?"blur(5px)":"blur(0px)"
    })

    this.mService.fetchPosts().subscribe((data:[])=>{
      this.fetchedData=data.slice(8);
      this.newsData=Object.keys(this.fetchedData[0]).map(
        (index)=>{
          let data = this.fetchedData[0][index]

          return data;
        }
      )
      this.mService.newsData.next(this.newsData);
      this.totalLength=this.newsData.length
      console.log( this.totalLength)

    })
    console.log("fetched")
   // console.log(this.fetchedData)
  }

  onSubmit(){
    this.mService.onSubmitForm(this.signUpForm.value)
  }

  onClose(id:number){
    this.RemoveElementFromArray(id)
    //console.log(id)
    --this.totalLength;
  }

  RemoveElementFromArray(element: number) {

    this.newsData.forEach((value,index)=>{
        if(value.id==element)
        this.newsData.splice(index,1)
    });

}
}
