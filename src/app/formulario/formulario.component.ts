import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  nome = '';
  email = '';

  @Output() formularioSubmetido = new EventEmitter<{ nome: string, email: string }>();

  enviar() {
    const dados = {
      nome: this.nome,
      email: this.email
    };
    this.formularioSubmetido.emit(dados);
  }
}
