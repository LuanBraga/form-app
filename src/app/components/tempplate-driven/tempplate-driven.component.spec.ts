import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempplateDrivenComponent } from './tempplate-driven.component';

describe('TempplateDrivenComponent', () => {
  let component: TempplateDrivenComponent;
  let fixture: ComponentFixture<TempplateDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempplateDrivenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
