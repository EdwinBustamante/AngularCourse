import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancionesListComponent } from './canciones-list.component';

describe('CancionesListComponent', () => {
  let component: CancionesListComponent;
  let fixture: ComponentFixture<CancionesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancionesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancionesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
