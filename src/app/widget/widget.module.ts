import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatPhonePipe } from '../shared/pipes/formatPhone.pipe';
import { WidgetComponent } from './widget.component';
import { WidgetInfoComponent } from './widget-info/widget-info.component';
import { WidgetWeatherComponent } from './widget-weather/widget-weather.component';
import { WidgetMainComponent } from './widget-main/widget-main.component';
import { WidgetPlacesComponent } from './widget-place/widget-places.component';
import { PlacesFilterPipe } from '../shared/pipes/placesFilter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WidgetComponent,
    WidgetMainComponent,
    WidgetInfoComponent,
    WidgetWeatherComponent,
    WidgetPlacesComponent,
    FormatPhonePipe,
    PlacesFilterPipe
  ],
  exports: [
    WidgetComponent
  ]
})
export class WidgetModule { }
