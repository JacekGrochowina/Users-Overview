import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddManyComponent } from './dialog-add-many.component';

describe('DialogAddManyComponent', () => {
  let component: DialogAddManyComponent;
  let fixture: ComponentFixture<DialogAddManyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddManyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddManyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
