import { Component } from '@angular/core';  
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-header',
  imports: [MatTooltipModule, MatTooltip],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  imgSrc = 'assets/img/Arthur2.jpg'
}
