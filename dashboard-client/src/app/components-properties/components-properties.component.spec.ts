import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsPropertiesComponent } from './components-properties.component';

describe('ComponentsPropertiesComponent', () => {
  let component: ComponentsPropertiesComponent;
  let fixture: ComponentFixture<ComponentsPropertiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentsPropertiesComponent]
    });
    fixture = TestBed.createComponent(ComponentsPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
