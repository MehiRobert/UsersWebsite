import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionalUserComponent } from './regional-user.component';

describe('RegionalUserComponent', () => {
  let component: RegionalUserComponent;
  let fixture: ComponentFixture<RegionalUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionalUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionalUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
