import { Component, OnInit } from '@angular/core';
import { BLOG } from 'src/blog';
import { AppModule } from '../app.module';
import { ServiceService } from '../service.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bodyform',
  templateUrl: './bodyform.component.html',
  styleUrls: ['./bodyform.component.css']
})
export class BodyformComponent implements OnInit {
  constructor(private service: ServiceService, private router: Router) {}
  blog: BLOG = { blogtitle: '', blogbody: '', blogauthor: '' };

  ngOnInit(): void {}
  submit() {
    console.log(this.blog);
    this.service.add(this.blog);
    this.router.navigateByUrl('/');
  }
}
