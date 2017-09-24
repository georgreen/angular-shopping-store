import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOdersComponent } from './admin-oders.component';

describe('AdminOdersComponent', () => {
  let component: AdminOdersComponent;
  let fixture: ComponentFixture<AdminOdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
