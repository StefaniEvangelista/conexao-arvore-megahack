import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoBuscaComponent } from './campo-busca.component';

describe('CampoBuscaComponent', () => {
  let component: CampoBuscaComponent;
  let fixture: ComponentFixture<CampoBuscaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampoBuscaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampoBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
