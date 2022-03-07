import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-principal',
  templateUrl: './page-principal.component.html',
  styleUrls: ['./page-principal.component.css']
})
export class PagePrincipalComponent implements OnInit {

  title = 'ordenanzas municipales';
  expanded = true;

  toggleExpanded(expanded:boolean){
    this.expanded = expanded;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
