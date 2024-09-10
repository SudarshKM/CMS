import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesDataComponent } from './tables-data.component';

describe('TablesDataComponent', () => {
  let component: TablesDataComponent;
  let fixture: ComponentFixture<TablesDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablesDataComponent]
    });
    fixture = TestBed.createComponent(TablesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
