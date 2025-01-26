import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleEventComponent } from './life-cycle-event.component';

describe('LifeCycleEventComponent', () => {
  let component: LifeCycleEventComponent;
  let fixture: ComponentFixture<LifeCycleEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeCycleEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeCycleEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
