import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtablissementsAjoutComponent } from './etablissements-ajout.component';

describe('EtablissementsAjoutComponent', () => {
  let component: EtablissementsAjoutComponent;
  let fixture: ComponentFixture<EtablissementsAjoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtablissementsAjoutComponent]
    });
    fixture = TestBed.createComponent(EtablissementsAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
