import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'kanban-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  customerId: string;
  constructor(private activatedRoute: ActivatedRoute, private seo: SeoService) { }

  ngOnInit(): void {
    this.customerId = this.activatedRoute.snapshot.paramMap.get('id') as string;

    this.seo.generateTags({
      title: 'Rahul',
      description: 'new user'
    })
  }

}
