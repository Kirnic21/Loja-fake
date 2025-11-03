import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shopcard } from './shopcard';

describe('Shopcard', () => {
  let component: Shopcard;
  let fixture: ComponentFixture<Shopcard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shopcard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shopcard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
