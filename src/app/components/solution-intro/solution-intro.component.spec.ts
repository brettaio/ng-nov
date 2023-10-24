import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionIntroComponent } from './solution-intro.component';

describe('SolutionIntroComponent', () => {
  let component: SolutionIntroComponent;
  let fixture: ComponentFixture<SolutionIntroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionIntroComponent]
    });
    fixture = TestBed.createComponent(SolutionIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
