import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyformComponent } from './bodyform.component';

describe('BodyformComponent', () => {
  let component: BodyformComponent;
  let fixture: ComponentFixture<BodyformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
