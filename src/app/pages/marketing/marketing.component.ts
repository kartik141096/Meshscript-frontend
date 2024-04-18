import { Component } from '@angular/core';
import { ContactDetailComponent } from '../../common/contact-detail/contact-detail.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-marketing',
  standalone: true,
  imports: [ContactDetailComponent, RouterLink],
  templateUrl: './marketing.component.html',
  styleUrl: './marketing.component.css'
})
export class MarketingComponent {

}
