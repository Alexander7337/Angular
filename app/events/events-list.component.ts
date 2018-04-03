import { Component } from '@angular/core' 

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular 2 Events</h1>
        <hr>
        <nav-bar></nav-bar>
        <event-thumbnail #thumbnail (eventClick)="handleEventClicked($event)" [event]=event1 ></event-thumbnail>
        <h2>{{thumbnail.customProperty}}</h2>
        <button (click) = thumbnail.publicLogFunction()>Start</button>
    </div>
    `
})
export class EventsListComponents {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/app/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }

    handleEventClicked(data){
        console.log(data);
    }
}