import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [LoggerService],
  // encapsulation: ViewEncapsulation.Emulated // Default
  // encapsulation: ViewEncapsulation.None // Nao recomendado pois afeta todos os componentes da aplicação
  encapsulation: ViewEncapsulation.ShadowDom // Recomendado
})
export class HomeComponent {

  constructor(public logger: LoggerService) { }

  adicionarLog() {
    this.logger.log('Log do Home');
  }
}
