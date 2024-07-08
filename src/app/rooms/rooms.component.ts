import { Component } from '@angular/core';
import { RoomDetails, Rooms } from './rooms';
import {NgIf} from '@angular/common';
import {NgFor} from '@angular/common';
import {NgClass} from '@angular/common';
import {NgStyle} from '@angular/common';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [NgIf,NgFor,NgClass,NgStyle,CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {
  title="Hotel Rooms"
  numberOfRooms=3
  rooms : Rooms={
    isRoomHidden: true
  }
  roomDetails : RoomDetails[]=[
    {
      roomNumber:1,
      roomPrice: 10000,
      roomDescription: "Air Conditioned With River view from Balcony",
      roomType : "Double BED"
      
    },   {
      roomNumber:3,
      roomPrice: 25000,
      roomDescription: "Air Conditioned With River view from Balcony",
      roomType : "Delux"
      
    },   {
      roomNumber:3,
      roomPrice: 5000,
      roomDescription: "Air Conditioned With River view from Balcony",
      roomType : "Premium"
      
    }
  ]
}
