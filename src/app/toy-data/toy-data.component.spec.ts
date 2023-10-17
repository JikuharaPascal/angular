import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyDataComponent } from './toy-data.component';

describe('ToyDataComponent', () => {
  let component: ToyDataComponent;
  let fixture: ComponentFixture<ToyDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToyDataComponent]
    });
    fixture = TestBed.createComponent(ToyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
