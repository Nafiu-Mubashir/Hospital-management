import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniquenessComponent } from './uniqueness.component';

describe('UniquenessComponent', () => {
  let component: UniquenessComponent;
  let fixture: ComponentFixture<UniquenessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniquenessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniquenessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
