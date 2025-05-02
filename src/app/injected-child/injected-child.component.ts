import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-injected-child',
  template: `
    <div class="child">
      <h4>Injected Child Component</h4>
      <p>Token: {{  token }}</p>
    </div>
  `
})
export class InjectedChildComponent {
  token: string;

  constructor(private tokenService: TokenService) { 
    this.token = this.tokenService.getToken(); // Vai dar Erro porque InjectedChildComponent nao tem acesso ao TokenService apenas o WrapperComponent pois está na sua view.
                                               // Irá gerar um erro NullInjectorError: No provider for TokenService
                                               // Para testar ao contrário (permitindo acesso) ao TokenService, basta trocar viewProviders por providers no WrapperComponent.
  }

}
