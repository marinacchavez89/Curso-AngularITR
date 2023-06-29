import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  longText = `Página no encontrada. Complete los campos solicitados de forma correcta.`;
}
