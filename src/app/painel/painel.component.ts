import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements AfterContentInit{

  @ContentChild('meuTitulo') tituloRef!: ElementRef;

  ngAfterContentInit(): void {
      console.log('Título projetado: ', this.tituloRef.nativeElement.textContent);
  }

}
