import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { EventsAppComponent } from './events-app.components';
import { EventsListComponents } from './events/events-list.component';
import { SampleComponent } from './events/new-sample-component';
import { EventThumbnailComponent } from './events/events-thumbnail.component'
import { NavComponent } from './nav/nav-menu';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        EventsAppComponent,
        EventsListComponents,
        SampleComponent,
        EventThumbnailComponent,
        NavComponent
    ],
    bootstrap: [EventsAppComponent]
})

export class AppModule {}