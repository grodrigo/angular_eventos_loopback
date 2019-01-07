import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventonewComponent } from './eventonew.component';

describe('EventonewComponent', () => {
  let component: EventonewComponent;
  let fixture: ComponentFixture<EventonewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventonewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventonewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
