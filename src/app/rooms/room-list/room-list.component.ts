import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoomDetails } from '../rooms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css'],
})
export class RoomListComponent implements OnInit {
  @Input() roomList: RoomDetails[] = [];
  @Input() numberOfRooms: number = 0;

  @Output() selectedRoom = new EventEmitter<RoomDetails>();

  constructor() {}

  ngOnInit() {}

  selectRoom(room: RoomDetails) {
    this.selectedRoom.emit(room);
    console.log(room);
  }
}
