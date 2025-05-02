import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteDinamicoComponent } from './componente-dinamico.component';

describe('ComponenteDinamicoComponent', () => {
  let component: ComponenteDinamicoComponent;
  let fixture: ComponentFixture<ComponenteDinamicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteDinamicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteDinamicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
