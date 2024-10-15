declare var google:any;
import { Component, inject, OnInit } from '@angular/core';
import { AuthserviceService } from '../../shared/services/authservice.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../core/components/header/header.component';
import { BannerComponent } from '../../core/components/banner/banner.component';
import { MovieService } from '../../shared/services/movie.service';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule, HeaderComponent, BannerComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})

export class BrowseComponent implements OnInit {
  auth = inject(AuthserviceService);
  movieService = inject(MovieService);

  name = JSON.parse(sessionStorage.getItem("loggedIUser")!).name;
  userprofileImage = JSON.parse(sessionStorage.getItem("loggedIUser")!).picture;
  email = JSON.parse(sessionStorage.getItem("loggedIUser")!).email;
  number = JSON.parse(sessionStorage.getItem("loggedIUser")!).nbf;

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(res=>{
      console.log(res);
    })
  }

  signout() {
    sessionStorage.removeItem("loggedIUser")
    this.auth.signOut();
  }

}
