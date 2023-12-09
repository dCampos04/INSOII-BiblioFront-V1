import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarRolComponent } from './actualizar-rol.component';

describe('ActualizarRolComponent', () => {
  let component: ActualizarRolComponent;
  let fixture: ComponentFixture<ActualizarRolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarRolComponent]
    });
    fixture = TestBed.createComponent(ActualizarRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
