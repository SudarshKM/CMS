import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsButtonsComponent } from './components-buttons.component';

describe('ComponentsButtonsComponent', () => {
  let component: ComponentsButtonsComponent;
  let fixture: ComponentFixture<ComponentsButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentsButtonsComponent]
    });
    fixture = TestBed.createComponent(ComponentsButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
