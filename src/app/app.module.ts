import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { MovienameComponent } from './moviename/moviename.component';
import { MoviedeleteComponent } from './moviedelete/moviedelete.component';
import { EditmovieComponent } from './editmovie/editmovie.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

const myroutes=[{path:"",component:AddmovieComponent},
{path:"moviename",component:MovienameComponent},
{path:"moviedelete",component: MoviedeleteComponent},
{path:"editmovie",component: EditmovieComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    AddmovieComponent,
    MovienameComponent,
    MoviedeleteComponent,
    EditmovieComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
