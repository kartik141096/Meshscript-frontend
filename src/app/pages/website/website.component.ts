import { Component } from '@angular/core';
import { ContactDetailComponent } from '../../common/contact-detail/contact-detail.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-website',
  standalone: true,
  imports: [ContactDetailComponent, RouterLink],
  templateUrl: './website.component.html',
  styleUrl: './website.component.css'
})
export class WebsiteComponent {

}
