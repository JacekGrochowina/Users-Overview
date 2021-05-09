import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddSingleComponent } from './dialog-add-single.component';

describe('DialogAddSingleComponent', () => {
  let component: DialogAddSingleComponent;
  let fixture: ComponentFixture<DialogAddSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
