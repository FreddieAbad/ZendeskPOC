import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteOnoClienteComponent } from './cliente-ono-cliente.component';

describe('ClienteOnoClienteComponent', () => {
  let component: ClienteOnoClienteComponent;
  let fixture: ComponentFixture<ClienteOnoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteOnoClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteOnoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
