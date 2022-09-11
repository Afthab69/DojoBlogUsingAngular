import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BLOG } from 'src/blog';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    private service: ServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  blog: BLOG = { blogtitle: '', blogbody: '', blogauthor: '' };
  id!: number;
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.blog = this.service.get(this.id);
  }

  delete() {
    this.service.delete(this.id);
    this.router.navigateByUrl('/');
  }
}
