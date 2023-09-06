import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearcherComponent } from './searcher/searcher.component';
import { TrendingArtistsClipsComponent } from './trending-artists-clips/trending-artists-clips.component';
import { StoriesComponent } from './stories/stories.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UploadComponent } from './upload/upload.component';
import { CreateComponent } from './create/create.component';
import { SmallHeaderComponent } from './small-header/small-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearcherComponent,
    TrendingArtistsClipsComponent,
    StoriesComponent,
    LoginComponent,
    HomeComponent,
    UploadComponent,
    CreateComponent,
    SmallHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

