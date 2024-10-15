import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input({required:true}) usrImg:string='';
  @Input({required:true}) name:string='';
navList=["Home","Tv-shows","News & Popular","My List","Browse by Language"]

}
