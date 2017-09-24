import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OderSuccessComponent } from './oder-success.component';

describe('OderSuccessComponent', () => {
  let component: OderSuccessComponent;
  let fixture: ComponentFixture<OderSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OderSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OderSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
