import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './search/search.component';
import { VideoListComponent } from './video-list/video-list.component';
import { PlayerComponent } from './player/player.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserAreaComponent } from './user-area/user-area.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    VideoListComponent,
    PlayerComponent,
    HomeComponent,
    LoginComponent,
    UserAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
