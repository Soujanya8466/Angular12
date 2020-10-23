import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditeamComponent } from './additeam.component';

describe('AdditeamComponent', () => {
  let component: AdditeamComponent;
  let fixture: ComponentFixture<AdditeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
