import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CookerComponent } from './products/cooker/cooker.component';
import { CsvParserService } from './services/csv-parser.service';
import { MixerComponent } from './products/mixer/mixer.component';
import { StoveComponent } from './products/stove/stove.component';
import { BlenderComponent } from './products/blender/blender.component';
import { MopComponent } from './products/mop/mop.component';
import { IronComponent } from './products/iron/iron.component';
import { GetfilterFromCSVService } from './services/getfilter-from-csv.service';
import { LatestProductsComponent } from './latest-products/latest-products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CookerComponent,
    MixerComponent,
    StoveComponent,
    BlenderComponent,
    MopComponent,
    IronComponent,
    LatestProductsComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, HttpClientModule ,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [CsvParserService,GetfilterFromCSVService],
  bootstrap: [AppComponent]
})
export class AppModule { }