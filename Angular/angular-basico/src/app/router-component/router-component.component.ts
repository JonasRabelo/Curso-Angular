import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-router-component',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './router-component.component.html',
  styleUrl: './router-component.component.css'
})
export class RouterComponentComponent {

}
