import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { AppService } from './app.service';
import { ImageComponent } from './apm-components/image/image.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService],
  styles: [`
    div{
      text-align:center;
      padding: 5px;
    }
  `]
})
export class AppComponent implements OnInit {

  dogBreeds: string[];
  imgUrl: string;
  text: string;
  loading: boolean = true;

  @ViewChild(ImageComponent) child: ImageComponent;

  constructor(private apiService: AppService) {
    this.apiService.getList().subscribe(response => { this.dogBreeds = response['message'] });
    this.getImgFromServer('chow');
  }

  ngOnInit() { }
  /**
   * @param  {} value
   * get selected value of selectbox, and called getImgFromServer
   */
  onSelected(value) {
    this.child.loading = true;
    this.getImgFromServer(value);
  }
  /**
   * @param  {string} value
   * called apiService to get image url and assign to imgUrl, then load image 
   */
  getImgFromServer(value: string) {
    this.apiService.getByBreed(value).subscribe(response => {
      this.imgUrl = response['message'];
    });
  }
}
