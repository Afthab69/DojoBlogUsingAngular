import { Component, OnInit } from '@angular/core';
// import { BLOG } from '../blog';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-bodyhome',
  templateUrl: './bodyhome.component.html',
  styleUrls: ['./bodyhome.component.css']
})
export class BodyhomeComponent implements OnInit {

  constructor(public service: ServiceService) {}
  blogs = this.service.blogs;
  ngOnInit(): void {
  }

}
