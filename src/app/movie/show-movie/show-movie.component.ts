import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.css']
})
export class ShowMovieComponent implements OnInit{

  constructor(private service: SharedService) { }

  MovieList:any=[];
  MovieListWF:any=[];

  ngOnInit(): void {
    this.refreshMovieList();
  }

  sortResult(prop:any,asc:boolean){
    this.MovieList = this.MovieListWF.sort(function(a:any,b:any){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

  addLike(item : any){
    this.service.like(item.MovieID).subscribe(data=>{
      item.likes = data.likes;
    });
  }

  delLike(item : any){
    this.service.unlike(item.MovieID).subscribe(data=>{
      item.likes = data.likes;
    });
  }
  refreshMovieList(){
    this.service.getMovieList().subscribe(data=>{
      this.MovieList=data;
      this.MovieListWF=data;

    });
    
  }
}
