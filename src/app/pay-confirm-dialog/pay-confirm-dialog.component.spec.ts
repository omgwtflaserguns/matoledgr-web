import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayConfirmDialogComponent } from './pay-confirm-dialog.component';

describe('PayConfirmDialogComponent', () => {
  let component: PayConfirmDialogComponent;
  let fixture: ComponentFixture<PayConfirmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayConfirmDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
