import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'apm-image',
  template: `
    <div class="content">
    <div *ngIf="loading" class="load"></div> 
    <img src="{{url}}" (load)="onLoad()">
    </div>   
  `,
  styles: [`
  .load {
    background-color: grey !important;
    opacity: 0.7;
    position: fixed;
    background: url(assets/loading.gif) center center no-repeat;
  }
  *{
    width: 600px;
    height: 600px;
    border-radius: 5px;
    border: 1px solid black;
  }
  .content{
    display: block;
    margin: 0 auto;;
  }
  `]
})
export class ImageComponent implements OnInit {

  /**Image url for load image*/
  @Input() url: string;

  /** Variable control the hide or display spinner*/
  @Input() loading: boolean;

  constructor() { }

  ngOnInit() { }

  /** After loading image spinner to be hide */
  onLoad(): void {
    this.loading = false;
  }



}
