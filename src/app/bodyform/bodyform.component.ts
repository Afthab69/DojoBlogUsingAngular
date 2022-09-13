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


  ngOnInit(): void {}
  submit(data:any) {
    console.log(data);
    this.service.add(data);
    this.router.navigateByUrl('/');
  }
}
