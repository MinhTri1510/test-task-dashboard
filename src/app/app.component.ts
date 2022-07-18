import { Component, ViewChild, Renderer2 } from '@angular/core';
import {  transferArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todoList_test';
  todo = [{
    title: 'my daily life  my daily life hihimy daily life hihi my daily life hihi', content:'remember to do home work'
  }];
  inprogress = [{
    title: 'sleep', content:'sleep for 8 hours'}];
  done = [{
    title: 'success', content:'yay!! I am done'
  }];
  drop(event: any) {
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
  panelOpenState = false;

}
