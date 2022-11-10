import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoconsultaComponent } from './videoconsulta.component';

describe('VideoconsultaComponent', () => {
  let component: VideoconsultaComponent;
  let fixture: ComponentFixture<VideoconsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoconsultaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoconsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
