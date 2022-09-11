import { Injectable } from '@angular/core';
import { BLOG } from '../blog';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  blogs: BLOG[] = [];
  get(id: number) {
    return this.blogs[id];
  }
  getId(blog: BLOG) {
    return this.blogs.indexOf(blog);
  }
  add(blog: BLOG) {
    this.blogs.push(blog);
  }
  edit(blog: BLOG, title: string, body: string, author: string) {
    blog.blogtitle = title;
    blog.blogbody = body;
    blog.blogauthor = author;
  }
  delete(id: number) {
    delete this.blogs[id];
    console.log(this.blogs)
  }
}

