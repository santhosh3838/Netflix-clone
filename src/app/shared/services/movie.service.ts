import { HttpClient } from '@angular/common/http';
import { inject, Injectable} from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
  
export class MovieService {
http=inject(HttpClient)
 
private options={
  params:{
    include_adult:'false',
    include_video:'true',
    language:'en-US',
    page:'1',
    sort_by:'popularity.desc'
  },
  headers:{
    accept:'application/json',
    Authorizatiion:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGY3NzZkODhkYTc0MDgxZDg4NDk5NDQwMDYwY2Q5ZSIsIm5iZiI6MTcyODkwNzc2MC40NzM5Nywic3ViIjoiNjcwZDAzMjQwYjgwMDUzN2Q3NWM2YmM2Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.T1gvzk2efvAvwKiqrfs1krvJCjbRWSf-SId7aQHk1E0',

    
  }
}

getMovies(){
  return this.http.get<any>('https://api.themoviedb.org/3/discover/movie?',this.options)
}
}
