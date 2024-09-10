import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsAlertsComponent } from './components-alerts.component';

describe('ComponentsAlertsComponent', () => {
  let component: ComponentsAlertsComponent;
  let fixture: ComponentFixture<ComponentsAlertsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentsAlertsComponent]
    });
    fixture = TestBed.createComponent(ComponentsAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
