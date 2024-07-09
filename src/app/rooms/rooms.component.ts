import { Component, OnInit } from '@angular/core';
import { RoomDetails, Rooms } from './rooms';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { RoomListComponent } from './room-list/room-list.component';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, AccordionModule, RoomListComponent],
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  roomDetails: RoomDetails[] = [];
  title = 'Hotel Rooms';
  numberOfRooms = 3;
  rooms: Rooms = {
    isRoomHidden: true
  };

  ngOnInit(): void {
    this.roomDetails = [
      {
        roomNumber: 1,
        roomPrice: 10000,
        roomDescription: 'Air Conditioned With River view from Balcony',
        roomType: 'Double BED'
      },
      {
        roomNumber: 2,
        roomPrice: 25000,
        roomDescription: 'Air Conditioned With River view from Balcony',
        roomType: 'Delux'
      },
      {
        roomNumber: 3,
        roomPrice: 5000,
        roomDescription: 'Air Conditioned With River view from Balcony',
        roomType: 'Premium'
      }
    ];
  }

  handleRoomSelection(room: RoomDetails) {
    console.log('Room selected in parent component:', room);
  }
}
