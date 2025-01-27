import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrssBarComponent } from './progrss-bar.component';

describe('ProgrssBarComponent', () => {
  let component: ProgrssBarComponent;
  let fixture: ComponentFixture<ProgrssBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgrssBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrssBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
