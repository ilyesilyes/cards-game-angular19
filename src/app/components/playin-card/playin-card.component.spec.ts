import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayinCardComponent } from './playin-card.component';

describe('PlayinCardComponent', () => {
  let component: PlayinCardComponent;
  let fixture: ComponentFixture<PlayinCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayinCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayinCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
