import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsCarouselComponent } from './components-carousel.component';

describe('ComponentsCarouselComponent', () => {
  let component: ComponentsCarouselComponent;
  let fixture: ComponentFixture<ComponentsCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentsCarouselComponent]
    });
    fixture = TestBed.createComponent(ComponentsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
