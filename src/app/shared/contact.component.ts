import { Component } from '@angular/core';
import { fadeInAnimation } from '../animations';

@Component({
    templateUrl: './contact.component.html',
    // make the animation available to this component
    animations: [fadeInAnimation],
    // attach the animation to the host (root) element of this component
    host: { '[@fadeInAnimation]': ''}
})
export class ContactComponent {
    constructor() { }

}