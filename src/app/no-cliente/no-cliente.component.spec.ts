import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoClienteComponent } from './no-cliente.component';

describe('NoClienteComponent', () => {
  let component: NoClienteComponent;
  let fixture: ComponentFixture<NoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
