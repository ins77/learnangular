import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatPhonePipe } from '../shared/pipes/formatPhone.pipe';
import { PlacesFilterPipe } from '../shared/pipes/placesFilter.pipe';
import { WidgetService } from './widget.service';
import { WidgetComponent } from './widget.component';
import { WidgetSocialComponent } from './widget-social/widget-social.component';
import { WidgetWeatherComponent } from './widget-weather/widget-weather.component';
import { WidgetMainComponent } from './widget-main/widget-main.component';
import { WidgetPlacesComponent } from './widget-place/widget-places.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WidgetComponent,
    WidgetMainComponent,
    WidgetSocialComponent,
    WidgetWeatherComponent,
    WidgetPlacesComponent,
    FormatPhonePipe,
    PlacesFilterPipe
  ],
  exports: [
    WidgetComponent
  ],
  providers: [
    WidgetService
  ]
})
export class WidgetModule { }
