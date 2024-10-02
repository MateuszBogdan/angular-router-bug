import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-abc',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './abc.component.html',
  styleUrl: './abc.component.css'
})
export class AbcComponent {

}
