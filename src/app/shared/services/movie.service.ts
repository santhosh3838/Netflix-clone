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
    Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZGU4MmFiZjg4Mjc0OTMwZWFhNTA2NThhZjBiOTYwNCIsIm5iZiI6MTczMjc5MDM1Ny4xMzYzODcsInN1YiI6IjYwYzhkZDQ0Y2E4MzU0MDAyOTk1OTYzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OR8e2S_bZmNgxw9ALkiT490xSxN3RzEnAlERhri_mp4',
  }
}

getMovies(){
  return this.http.get<any>('https://api.themoviedb.org/3/discover/movie?',this.options)
}
}
