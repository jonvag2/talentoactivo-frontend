import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OursevicesComponent } from './oursevices.component';

describe('OursevicesComponent', () => {
  let component: OursevicesComponent;
  let fixture: ComponentFixture<OursevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OursevicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OursevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
