import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { AppService } from '../app.service';
import { ImageComponent } from '../apm-components/image/image.component';
import { DropdownComponent } from '../apm-components/dropdown/dropdown.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'aimprogman-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AppService],
  styles: [`
  div{
    text-align:center;
    padding: 5px;
  }
`]

})
export class HomeComponent implements OnInit {

  dogBreeds: string[];
  imgUrl: string;
  loading: boolean = true;
  breed: string;
  selected: string;

  @ViewChild(ImageComponent) child: ImageComponent;

  constructor(
    private apiService: AppService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

    activatedRoute.params.subscribe(params => {
      this.breed = params['id'];
    });

    this.apiService.getList().subscribe(response => {
      this.dogBreeds = response['message'];
      this.selected = this.breed
    });

      this.getImgFromServer(this.breed);
  }

  ngOnInit() { }
  /**
   * @param  {} value selected value of selectbox
   * 
   */
  onSelected(value) {
    this.child.loading =  true; // update properity of child component, if image loads, then show loading gif  
    this.router.navigate(['/', value]);
    this.getImgFromServer(value);
  }
  /**
   * @param  {string} value
   * called apiService to get image url and assign to imgUrl, then load image 
   */
  getImgFromServer(value: string='chow') {
    if(value)
    this.apiService.getByBreed(value).subscribe((data) => {
      this.imgUrl = data['message'];
    },(error)=>{
      console.log("Нет такой пароды собаки!");
    }
  
  );

  }
}
