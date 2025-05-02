import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-push-demo',
  template: `
    <h4>OnPush Demo</h4>
    <p>Nome: {{ user?.name }}</p>
    <button (click)="alterarNome()"> Alterar nome (não funciona)</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushDemoComponent {
  @Input() user!: { name: string };

  alterarNome() {
    this.user.name = 'Novo nome'; 
  }

}
