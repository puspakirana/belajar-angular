import { Component } from "@angular/core";

@Component ({
    selector : 'hello-world-interpolation',
    templateUrl : "./hello-world-interpolation.component.html",
    styles : [`h2, p {font-family: sans-serif}`]
})

export class HelloWorldUrlInterpolation {
    judul = "Hello World Interpolation"
    gambar = "assets/angular.png"
    active = true
}
