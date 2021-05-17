import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { title } from "process";
import { Subject, throwError } from "rxjs";
import {map,tap,catchError} from 'rxjs/operators'
import { environment } from "src/environments/environment";
import { DataModel } from "../data.model";
@Injectable({providedIn:"root"})
export class MediatorService{
tileView=new Subject<boolean>();
overlay=new Subject<boolean>();
newsData=new Subject<DataModel[]>();
constructor(private http:HttpClient){

}
setView(view:boolean){
  this.tileView.next(view)
}

fetchPosts()
    {
    return this.http.get
             ('https://api.first.org/data/v1/news',{
                 responseType:'json'
             }).
             pipe(tap(event=>{
                console.log(event)
             }),
            map(responseData=>{
              const postArray=[];
                for(const key in responseData){
                if(responseData.hasOwnProperty(key))
                {
            postArray.push({...responseData[key],id:key})
                }
                }
                return postArray
            }),
            catchError(errorRes=>{
                return throwError(errorRes)
            })
            );

    }


    onSubmitForm(formData){
      if(!formData.valid)
    {

      this.http.post(environment.apiKey,formData)
    .subscribe(res=>{
      this.overlay.next(false);
    })
  }

    }
}
