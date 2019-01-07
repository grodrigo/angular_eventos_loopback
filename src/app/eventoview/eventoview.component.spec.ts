import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoviewComponent } from './eventoview.component';

describe('EventoviewComponent', () => {
  let component: EventoviewComponent;
  let fixture: ComponentFixture<EventoviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
