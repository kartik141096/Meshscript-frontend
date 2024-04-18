import { Component } from '@angular/core';
import { ContactDetailComponent } from '../../common/contact-detail/contact-detail.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactDetailComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
