import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createnewtask } from './createnewtask';

describe('Createnewtask', () => {
  let component: Createnewtask;
  let fixture: ComponentFixture<Createnewtask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Createnewtask]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Createnewtask);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
