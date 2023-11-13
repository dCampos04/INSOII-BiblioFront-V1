import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCatalogoBibliotecarioComponent } from './body-catalogo-bibliotecario.component';

describe('BodyCatalogoBibliotecarioComponent', () => {
  let component: BodyCatalogoBibliotecarioComponent;
  let fixture: ComponentFixture<BodyCatalogoBibliotecarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyCatalogoBibliotecarioComponent]
    });
    fixture = TestBed.createComponent(BodyCatalogoBibliotecarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
