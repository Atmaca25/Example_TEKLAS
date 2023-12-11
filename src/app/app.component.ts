import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "./login/login.component";
import { MainComponent } from "./layout/main/main.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        CommonModule,
        LoginComponent,
        MainComponent ,
        RouterOutlet
    ]
})
export class AppComponent {

  constructor(
    @Inject('API_URL') private apiUrl: string
  ){
    console.log(apiUrl);
  }
  title = 'SPA_TEKLAS';
  isAuthenticate = true;


  helloWorld() {
    alert('hello world!');
  }
}
