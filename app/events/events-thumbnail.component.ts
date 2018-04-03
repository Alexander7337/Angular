import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    template: `
        <div class="well hoverwell thumbnail">
            <h2>{{event.name}}</h2>
            <div>Date: {{event.date}}</div>
            <div>Time: {{event.time}}</div>
            <div>Price: \${{event.price}}</div>
            <div>
                <span>Location: {{event.location.address}}</span>
                <span>&nbsp;</span>
                <span>
                    {{event.location.city}},
                    {{event.location.country}}
                </span>
            </div>
            <img src="{{event.imageUrl}}" alt="IMG">
            <button class="btn btn-primary" (click)="handleClickMe()">Click !</button>
        </div>
    `
})

export class EventThumbnailComponent {
    @Input() event:any;

    customProperty:any = "Custom property"

    @Output() eventClick = new EventEmitter();

    handleClickMe(data) {
        console.log("Button clicked !");
        this.eventClick.emit("foo");
        this.eventClick.emit(this.event.name);
    }

    publicLogFunction() {
        console.log("Public function called !")
    }
}