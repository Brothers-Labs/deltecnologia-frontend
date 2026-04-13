import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-floating-whatsapp-button',
  imports: [MatIconModule],
  templateUrl: './floating-whatsapp-button.component.html',
  styleUrl: './floating-whatsapp-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FloatingWhatsappButtonComponent {
  @Input({ required: true }) href = '';
}
