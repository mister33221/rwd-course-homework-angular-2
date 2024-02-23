import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainChefComponent } from './main-chef.component';

describe('MainChefComponent', () => {
  let component: MainChefComponent;
  let fixture: ComponentFixture<MainChefComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainChefComponent]
    });
    fixture = TestBed.createComponent(MainChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
