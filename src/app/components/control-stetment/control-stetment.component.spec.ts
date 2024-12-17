import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlStetmentComponent } from './control-stetment.component';

describe('ControlStetmentComponent', () => {
  let component: ControlStetmentComponent;
  let fixture: ComponentFixture<ControlStetmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlStetmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlStetmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
