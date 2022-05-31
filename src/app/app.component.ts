import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import { AuthService } from './auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'myfirsthttp';
constructor(public _auth: AuthService){}
  ngOnInit(): void {
    const firebaseConfig = {
      apiKey: "AIzaSyAcNDwjtbTvNDsQXu3VDiloKxfCJTifhIg"
    };
    firebase.initializeApp(firebaseConfig);
  }
onLogout(){
  this._auth.logout();
}

  
}
