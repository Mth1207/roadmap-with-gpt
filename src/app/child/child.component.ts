import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>Olá, {{ nome }}</p>
    <button (click)="enviarMensagem()">Enviar mensagem</button>
  `
})
export class ChildComponent {

  @Input() nome!: string;

  @Output() mensagem = new EventEmitter<string>();

  enviarMensagem() {
    this.mensagem.emit('Olá do filho');
  }

}
