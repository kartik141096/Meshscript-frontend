import { Component } from '@angular/core';
import { ContactDetailComponent } from '../../common/contact-detail/contact-detail.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-seo',
  standalone: true,
  imports: [ContactDetailComponent, RouterLink],
  templateUrl: './seo.component.html',
  styleUrl: './seo.component.css'
})
export class SeoComponent {

}
