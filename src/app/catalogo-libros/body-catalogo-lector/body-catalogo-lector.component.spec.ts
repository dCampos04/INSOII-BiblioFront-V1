import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCatalogoLectorComponent } from './body-catalogo-lector.component';

describe('BodyCatalogoLectorComponent', () => {
  let component: BodyCatalogoLectorComponent;
  let fixture: ComponentFixture<BodyCatalogoLectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyCatalogoLectorComponent]
    });
    fixture = TestBed.createComponent(BodyCatalogoLectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
