import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsBreadcrumbsComponent } from './components-breadcrumbs.component';

describe('ComponentsBreadcrumbsComponent', () => {
  let component: ComponentsBreadcrumbsComponent;
  let fixture: ComponentFixture<ComponentsBreadcrumbsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentsBreadcrumbsComponent]
    });
    fixture = TestBed.createComponent(ComponentsBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
