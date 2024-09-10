import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsBadgesComponent } from './components-badges.component';

describe('ComponentsBadgesComponent', () => {
  let component: ComponentsBadgesComponent;
  let fixture: ComponentFixture<ComponentsBadgesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentsBadgesComponent]
    });
    fixture = TestBed.createComponent(ComponentsBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
