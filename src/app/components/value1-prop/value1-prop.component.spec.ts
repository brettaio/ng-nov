import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Value1PropComponent } from './value1-prop.component';

describe('Value1PropComponent', () => {
  let component: Value1PropComponent;
  let fixture: ComponentFixture<Value1PropComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Value1PropComponent]
    });
    fixture = TestBed.createComponent(Value1PropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
