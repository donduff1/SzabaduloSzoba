import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexTxtComponent } from './foglalasok.component';

describe('IndexTxtComponent', () => {
  let component: IndexTxtComponent;
  let fixture: ComponentFixture<IndexTxtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexTxtComponent]
    });
    fixture = TestBed.createComponent(IndexTxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
