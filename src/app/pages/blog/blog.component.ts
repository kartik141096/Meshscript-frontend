import { Component, OnInit, Injectable  } from '@angular/core';
import { ApiService } from './../../api.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit{

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  blogs: any[] = [];
  noOfPages = 0;
  postPerPage = 1;
  pageID = 0;
  blogsForPage: any[] = [];


  ngOnInit(): void {
    
    this.route.params.subscribe(params => {

      this.pageID = params['page_id'];
    });

    this.apiService.getBlogs().subscribe((response) => {
      
      this.blogs = Object.keys(response).map(key => ({ title: key, ...response[key] }));
    });

    this.noOfPages = Math.round(this.blogs.length/this.postPerPage);
    // this.blogsForPage = 
  }

}
