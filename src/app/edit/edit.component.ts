import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BLOG } from 'src/blog';
import { ServiceService } from '../service.service';
import { NgForm } from '@angular/forms';
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

  blog: BLOG = { title: '', message: '', author: '' };
  id!: number;
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.blog = this.service.get(this.id);
  }

  backhome(form:any){
    console.log(form);

    this.service.edit(this.blog,form['title'],form['message'],form['author'])
    this.router.navigateByUrl('/');
  }
  delete() {
    this.service.delete(this.id);
    this.router.navigateByUrl('/');
  }
}
