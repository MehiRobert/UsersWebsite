import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertBasicUserComponent } from './insert-basic-user.component';

describe('InsertBasicUserComponent', () => {
  let component: InsertBasicUserComponent;
  let fixture: ComponentFixture<InsertBasicUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertBasicUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertBasicUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
