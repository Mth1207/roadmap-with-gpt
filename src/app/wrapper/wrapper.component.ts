import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-wrapper',
  template: `
    <div class="wrapper"> 
      <h3>Wrapper Component</h3>
      <ng-content></ng-content> <!-- Conteúdo externo projetado -->
    </div>
  `,
  // viewProviders: [TokenService] // Visível apenas dentro da view do Wrapper
  providers: [TokenService]
})
export class WrapperComponent {

  constructor(private tokenService: TokenService) {
    console.log('Wrapper vê token: ', this.tokenService.getToken());
   }
}
