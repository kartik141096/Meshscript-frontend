import { Component } from '@angular/core';
import { ContactDetailComponent } from '../../common/contact-detail/contact-detail.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ContactDetailComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
