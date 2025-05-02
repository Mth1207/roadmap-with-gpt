import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectedChildComponent } from './injected-child.component';

describe('InjectedChildComponent', () => {
  let component: InjectedChildComponent;
  let fixture: ComponentFixture<InjectedChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InjectedChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectedChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
