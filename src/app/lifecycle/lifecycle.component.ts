import { AfterContentInit, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit, OnDestroy  {

  constructor() { console.log('Construtor: lifecycle.component.ts') }

  ngOnChanges(): void {
    console.log('ngOnChanges: Mudança nas propriedades de entrada');
  }
  ngOnInit(): void {
    console.log('ngOnInit: Inicializador do componente');
  }

  ngDoCheck(): void {
      console.log('ngDoCheck: Verificação personalizada de mudanças.');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit: Conteúdo projetado foi inicializado.');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: Visualização do componente foi inicializada.');
  }

  ngOnDestroy(): void {
      console.log('ngOnDestroy: Componente está sendo destruído.');
  }

}
