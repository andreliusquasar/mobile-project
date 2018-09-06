import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMobileComponent } from './lista-mobile.component';

describe('ListaMobileComponent', () => {
  let component: ListaMobileComponent;
  let fixture: ComponentFixture<ListaMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
