import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentDrawerComponent } from './parent-drawer.component';

describe('ParentDrawerComponent', () => {
  let component: ParentDrawerComponent;
  let fixture: ComponentFixture<ParentDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentDrawerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
