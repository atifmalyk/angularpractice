import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms.component";
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RoomsComponent,LoginComponent,CommonModule]
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  title = 'my-angular-workspace';

  userType = 'user'
}
