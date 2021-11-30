import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPornombreComponent } from './buscar-pornombre.component';

describe('BuscarPornombreComponent', () => {
  let component: BuscarPornombreComponent;
  let fixture: ComponentFixture<BuscarPornombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarPornombreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarPornombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
