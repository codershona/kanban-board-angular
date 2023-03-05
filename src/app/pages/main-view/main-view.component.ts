import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  board: Board = new Board('Test Board', [
    new Column('Ideas', [
      "Some of my own random idea",
      "This could be another random messy ideas",
      "I am building an Kanban Apps"
    ]),
    new Column('Research', [
      "Some of my own random research 2",
      "This could be another random messy research 2",
      "I am building an Kanban Apps 2"
    ]),
    new Column('Todo', [
      'Get to work', 
      'Pick up groceries', 
      'Go home', 
      'Fall asleep'
    ]),
    new Column('Completed', [
      'Get up', 
      'Brush teeth', 
      'Take a shower', 
      'Check e-mail', 
      'Walk dog'
    ]),
  ]);

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
