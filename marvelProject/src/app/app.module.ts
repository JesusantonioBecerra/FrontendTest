import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuperFooterModule } from './super-footer/super-footer.module';
import { SuperHeaderModule } from './super-header/super-header.module';
import { HttpClientModule } from '@angular/common/http';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzLayoutModule,
    SuperFooterModule,
    SuperHeaderModule,
    HttpClientModule,
    NzSpinModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
