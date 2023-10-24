import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Value2PropComponent } from './value2-prop.component';

describe('Value2PropComponent', () => {
  let component: Value2PropComponent;
  let fixture: ComponentFixture<Value2PropComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Value2PropComponent]
    });
    fixture = TestBed.createComponent(Value2PropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
