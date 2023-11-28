import { Component } from "@angular/core";
import { MonDecorateur } from "./mydecorator";

@MonDecorateur
@Component({
    selector: 'decorator-component',
    templateUrl: './decorator.html',
    styleUrls: ['./decorator.scss']
})

export class DecoratorComponent {

    constructor() {
    }

}
