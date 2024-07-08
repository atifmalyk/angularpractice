import { Component } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AccordionModule } from 'ngx-bootstrap/accordion'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [TooltipModule,AccordionModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  isToggled = false;
  toggle() {
    this.isToggled = !this.isToggled;
  }
}
