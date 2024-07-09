import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms.component";
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AccordionModule } from 'ngx-bootstrap/accordion';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RoomsComponent,CommonModule,BsDropdownModule,AccordionModule]
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  title = 'my-angular-workspace';

  userType = 'admin'
}
