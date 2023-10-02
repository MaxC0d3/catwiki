import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css'],
})
export class StatusBarComponent {
  @Input() adaptabilityLevel: number = 0;

  barras: boolean[] = [false, false, false, false, false];

  ngOnChanges() {
    this.actualizarBarras();
  }

  private actualizarBarras() {
    for (let i = 0; i < this.barras.length; i++) {
      this.barras[i] = i < this.adaptabilityLevel;
    }
  }
}
