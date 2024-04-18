import { Component } from '@angular/core';
import { ContactDetailComponent } from '../../common/contact-detail/contact-detail.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-advertising',
  standalone: true,
  imports: [RouterLink, ContactDetailComponent],
  templateUrl: './advertising.component.html',
  styleUrl: './advertising.component.css'
})
export class AdvertisingComponent {

}
