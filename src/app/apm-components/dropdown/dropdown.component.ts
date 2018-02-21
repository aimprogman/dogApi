import { Component, OnInit, Input, Output, forwardRef, EventEmitter, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'apm-dropdown',
  template: `
  <select name="{{name}}" (change)="onSelectChange()" [(ngModel)]="selectedOption">
    <option disabled="" [ngValue]="'default'">{{placeholder}}</option>
    <option *ngFor="let item of options" [ngValue]="item">{{item}}</option>
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

  `],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true
    }
  ]
})
export class DropdownComponent implements ControlValueAccessor {

  /**
   *  Input Output Variables
   */

  @Input() options: string[];

  @Input() name: string = "default";
  
  @Input() placeholder : string;

  @Output() onChange = new EventEmitter();

  /**
   * used for get and set value of selectbox 
   */
  selectedOption: string;
  /**
   * constructor of class
   */

  constructor() {}
  /**
   * this function must be called when updated Input variable options, then assigned default value of selectbox
  */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['options']) {
      this.selectedOption = 'default';
    }
  }
  /**
   * onchange event of selectbox element, emit to parent component the current value of selectbox 
   */
  onSelectChange() {
    this.onChange.emit(this.selectedOption);
  }

  /**
   * method of interface ControlValueAccessor, called when ngModel of DropdownComponent updated
   */
  writeValue(value) {
    this.selectedOption = value;
  }

  registerOnChange() { }

  registerOnTouched() { }

}
