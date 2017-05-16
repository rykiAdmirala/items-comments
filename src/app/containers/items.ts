import { Component, OnInit } from '@angular/core';
import { Item, Comment } from '../models/index';
import { ITEMS } from '../items';


@Component({
  template: `
    <div class="content__panes">
      <div class="content__pane items">

        <div class="content__title">Items</div>

        <item-creator
          (itemCreated)="onItemCreated($event)"
        ></item-creator>        
      
        <div class="item"
          *ngFor="let item of items; let i = index"
          [class.active]="item === activeItem"
          (click)="selectItem(item, i)"
        >
          <div class="item__wrapper">
            <div class="item__text">{{ item.title }}</div>
            <div class="item__comments-count">{{ item.comments.length }}</div>
            <div class="item__delete" (click)="onDeleteItem(i)">Delete</div>
          </div>
        </div>

      </div>

      <div
        class="content__pane comments"
        *ngIf="activeItem"
      >
        <div class="content__title">Comments #{{ activeItem.index + 1 }}</div>

        <div class="comment"
          *ngFor="let comment of activeItem.comments"
        >
          <div class="comment__author color--{{ comment.color }}"></div>
          <div class="comment__text">{{ comment.text }}</div>
        </div>

        <comment-creator
          [colors]="colors"
          (commentCreated)="onCommentCreated($event)"
        ></comment-creator>
        
      </div>
    </div>
  `
})
export class Items implements OnInit {

  activeItem: Item;
  items: Item[];
  isSelectorVisible: boolean = false;
  colors: string[] = ['orange', 'blue', 'red', 'yellow', 'tile', 'gray'];

  private updateStorage() {
    localStorage.setItem('empeekItems', JSON.stringify(this.items));
  }

  ngOnInit() {
    if (localStorage.getItem('empeekItems')) {
      this.items = JSON.parse(localStorage.getItem('empeekItems'));
    } else {
      this.items = ITEMS;
      this.updateStorage();
    }
    
    // Making first item active after page loads, if there are any items in store
    if (this.items.length > 0) this.makeItemActive(0);
  }
  
  onItemCreated(newItem) {
    this.items.push(newItem);
    this.updateStorage();
  }

  onDeleteItem(index) {
    this.items.splice(index, 1);
    this.updateStorage();
 
    if (this.items.length === 0) {
      // If delete item last at all, reset active item
      this.activeItem = undefined;
    } else if (this.activeItem.index === this.items.length) {
      // If delete item last in order, make previous item active
      this.makeItemActive(index-1);
    } else if (this.activeItem.index === index) {
      // If delete item, make next item active
      this.makeItemActive(index);
    }
  }

  onCommentCreated(newComment) {
    this.items[this.activeItem.index].comments.push(newComment);
    this.updateStorage();
  }  

  makeItemActive(num: number) {
    this.activeItem = this.items[num];
    this.activeItem.index = num;
  }

  selectItem(item, i) {
    this.activeItem = item;
    this.activeItem.index = i;
  }


}
