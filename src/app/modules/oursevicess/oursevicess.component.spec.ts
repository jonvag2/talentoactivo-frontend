import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OursevicessComponent } from './oursevicess.component';

describe('OursevicessComponent', () => {
  let component: OursevicessComponent;
  let fixture: ComponentFixture<OursevicessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OursevicessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OursevicessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
