declare var google:any;
import { Component,inject,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements  OnInit{
private router=inject(Router)


ngOnInit(): void {
  google.accounts.id.initialize({
    client_id:'832184646671-qg1fg5fmdl983kfumvpqc0uuhi31jdov.apps.googleusercontent.com',
    scope:'profile email',
    callback:(resp:any)=>
     this.handlelogin(resp)

    
  });
  google.accounts.id.renderButton(document.getElementById("google-btn"), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 350
    })
}
private decodeToken(token:string){
  return JSON.parse(atob(token.split(".")[1]))
}
handlelogin(response:any)
{
if(response)
{
const payload=this.decodeToken(response.credential)
sessionStorage.setItem("loggedIUser", JSON.stringify(payload));
this.router.navigateByUrl('browse');
}
}
}