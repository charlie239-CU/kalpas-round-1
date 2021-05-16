export class DataModel {
  id:number;
  link:string;
  image?:string;
  published:Date;
  summary:string;
  title:string;

  constructor(id:number,image:string,link:string,published:Date,summary:string,title:string){
    this.id=id;
    this.image=image;
    this.link=link
    this.published=published
    this.summary=summary
    this.title=title
  }
}
