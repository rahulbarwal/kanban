import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'kanban-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  customers: any;
  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.generateTags({
      title: 'Customer list',
      description: 'A list of all the customers.'
    })

    this.customers = [{ id: '1', name: 'Rahul Barwal' }]
  }

}
