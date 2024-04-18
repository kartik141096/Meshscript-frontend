import { Component } from '@angular/core';
import { ContactDetailComponent } from '../../common/contact-detail/contact-detail.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-graphic',
  standalone: true,
  imports: [ContactDetailComponent, RouterLink],
  templateUrl: './graphic.component.html',
  styleUrl: './graphic.component.css'
})
export class GraphicComponent {

}
