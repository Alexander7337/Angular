import { Component } from '@angular/core'

@Component({
    selector: 'sample',
    template: `
        <div>
            <div>
                <span>Name: {{person.first}}</span>
                <span>&nbsp;</span>
                <span>{{person.last}}</span>
                <span>&nbsp;</span>
                <span>Age: {{person.age}}</span>
            </div>
        </div>
    `
})

export class SampleComponent {
    person = {
        first: 'Gosho',
        last: 'Ivanov',
        age: 32
    }
}