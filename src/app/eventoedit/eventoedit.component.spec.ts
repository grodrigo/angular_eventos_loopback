import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoeditComponent } from './eventoedit.component';

describe('EventoeditComponent', () => {
  let component: EventoeditComponent;
  let fixture: ComponentFixture<EventoeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
