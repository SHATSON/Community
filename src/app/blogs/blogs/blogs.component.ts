import { BlogsService } from './../services/blogs.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../services/data';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  posts!: Post[];

  constructor(private blogsService: BlogsService) { }

  ngOnInit(): void {
    this.posts = this.blogsService.posts;
  }

}
