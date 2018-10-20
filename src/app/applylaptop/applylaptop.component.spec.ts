import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplylaptopComponent } from './applylaptop.component';

describe('ApplylaptopComponent', () => {
  let component: ApplylaptopComponent;
  let fixture: ComponentFixture<ApplylaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplylaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplylaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
