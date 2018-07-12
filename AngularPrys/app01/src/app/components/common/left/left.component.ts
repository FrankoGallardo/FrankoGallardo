import { Component, OnInit } from '@angular/core';
@Component({
     selector: 'app-left',
     templateUrl: './left.component.html'
 })
 export class LeftComponent implements OnInit {
    titulo = 'Noticias';
    item: Array<string> = ['Noticia uno', 'Noticia dos', 'Noticia tres'];

    constructor(){}
    ngOnInit(){}
 }