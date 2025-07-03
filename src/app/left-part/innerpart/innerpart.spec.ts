import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Innerpart } from './innerpart';

describe('Innerpart', () => {
  let component: Innerpart;
  let fixture: ComponentFixture<Innerpart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Innerpart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Innerpart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
