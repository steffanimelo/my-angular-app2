import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',   // Using app-servers as an attribute for CSS
  // selector: '.app-servers',    //  Using app-servers as a class for CSS 
  selector: 'app-servers',     
  // template: 
  // `<app-server></app-server>
  // <app-server></app-server>`, //templates are mandatory for every single component
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
