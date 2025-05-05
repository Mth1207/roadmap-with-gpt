import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';
import { ComponenteDinamicoComponent } from './componente-dinamico/componente-dinamico.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'modular-angular';
  // usuario = { name: 'Matheus' };

  // receberMensagem(msg: string) {
  //   alert('Pai recebeu: ' + msg);
  // }

  // enviarParaBackend(dados: {nome: string; email: string}) {
  //   console.log('Enviando para backend: ', dados);
  //   alert('Dados enviados com sucesso!');
  // }

  // @ViewChild(ContadorComponent) contadorComponent: ContadorComponent | undefined;

  // incrementarDoPai() {
  //   this.contadorComponent?.incrementar();
  // }

  // @ViewChild('componenteDinamicoContainer', { read: ViewContainerRef}) container!: ViewContainerRef;

  // constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  // criarComponenteDinamico() {
  //   const factory = this.componentFactoryResolver.resolveComponentFactory(ComponenteDinamicoComponent);
  //   this.container.clear();
  //   this.container.createComponent(factory);
  // }
}
