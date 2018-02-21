import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: ':id', component: HomeComponent },
  ]
  
export default RouterModule.forRoot(routes);  