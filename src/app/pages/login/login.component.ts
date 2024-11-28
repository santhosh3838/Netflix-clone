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
  //to initialise google sign
  google.accounts.id.initialize({   
    client_id:'832184646671-qg1fg5fmdl983kfumvpqc0uuhi31jdov.apps.googleusercontent.com',           
    scope:'profile email',
    callback:(resp:any)=>{
      
     this.handlelogin(resp)
     
  
    }
  });
  //this is to render the google button 
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
  //decode the token once u have the response     
const payload=this.decodeToken(response.credential)
//store it in sessionstorage
sessionStorage.setItem("loggedIUser", JSON.stringify(payload));
//navigate to browse page
this.router.navigateByUrl('browse');
}
}


}