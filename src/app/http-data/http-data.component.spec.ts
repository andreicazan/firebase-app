import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpDataComponent } from './http-data.component';

describe('HttpDataComponent', () => {
  let component: HttpDataComponent;
  let fixture: ComponentFixture<HttpDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
