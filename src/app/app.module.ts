import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { NaviComponent } from './navi/navi.component';
import { CategoryComponent } from './category/category.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NaviComponent,
    CategoryComponent,
    VatAddedPipe,
    FilterPipePipe

  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule,ToastrModule.forRoot({positionClass:"toast-bottom-right"}),BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
