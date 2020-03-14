import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../animations';

@Component({
    templateUrl: './error.component.html',
    // make the animation available to this component
    animations: [fadeInAnimation],
    // attach the animation to the host (root) element of this component
    host: { '[@fadeInAnimation]': ''}
})
export class ErrorComponent implements OnInit {

    message: string = "";

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        let reason:string = this.route.snapshot.queryParams['reason'] || 'none';


        this.message = reason;
    }
}