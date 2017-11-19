import { NgModule } from '@angular/core';
import { WidgetComponent } from './widget.component';
import { WidgetInfoComponent } from './widget-info/widget-info.component';
import { WidgetWeatherComponent } from './widget-weather/widget-weather.component';
import { WidgetMainComponent } from './widget-main/widget-main.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WidgetComponent,
    WidgetMainComponent,
    WidgetInfoComponent,
    WidgetWeatherComponent
  ],
  exports: [
    WidgetComponent
  ]
})
export class WidgetModule { }
