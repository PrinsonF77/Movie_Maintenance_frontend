import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-actor',
  templateUrl: './show-actor.component.html',
  styleUrls: ['./show-actor.component.css']
})
export class ShowActorComponent implements OnInit{
  constructor(private service: SharedService) { }
  ActorList:any=[];
  ActorListWF:any=[];

  ngOnInit(): void {
    this.refreshActorList();
  }

  sortResult(prop:any,asc:boolean){
    this.ActorList = this.ActorListWF.sort(function(a:any,b:any){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }
  
  refreshActorList(){
    this.service.getActorList().subscribe(data=>{
      this.ActorList=data;
      this.ActorListWF=data;

    });
  }
}
