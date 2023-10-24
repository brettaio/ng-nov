import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Value3PropComponent } from './value3-prop.component';

describe('Value3PropComponent', () => {
  let component: Value3PropComponent;
  let fixture: ComponentFixture<Value3PropComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Value3PropComponent]
    });
    fixture = TestBed.createComponent(Value3PropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
