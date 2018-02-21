import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'apm-dropdown',
  template: `
  <select name="{{name}}" (change)="onChange($event)">
    <option *ngFor="let item of options" value="{{item}}">{{item}}</option>
  <select>`,
  styles: [`
  select{
    height: 35px;
    border: solid grey 1px;
    border-radius: 3px;
    font-family: Roboto;
    font-size: 15px;
    cursor: pointer;
  }
  option{
    padding: 3px;
  }

  `]
})
export class DropdownComponent {

  /**
   *  Input Output Variables
   */

  @Input() options: string[];

  @Input() name: string = "default";
  
  @Output() selected = new EventEmitter();

  /**
   * constructor of class
   */

  constructor() { }

  /**
   * @param  {} event
   * onchange event of selectbox element, emit to parent component the value of selectbox 
   */
  onChange(event) {
    let value: string = event.target.value;
    this.selected.emit(value);
  }

}
