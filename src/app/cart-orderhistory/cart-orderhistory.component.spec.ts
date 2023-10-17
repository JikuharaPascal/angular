import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartOrderhistoryComponent } from './cart-orderhistory.component';

describe('CartOrderhistoryComponent', () => {
  let component: CartOrderhistoryComponent;
  let fixture: ComponentFixture<CartOrderhistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartOrderhistoryComponent]
    });
    fixture = TestBed.createComponent(CartOrderhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
