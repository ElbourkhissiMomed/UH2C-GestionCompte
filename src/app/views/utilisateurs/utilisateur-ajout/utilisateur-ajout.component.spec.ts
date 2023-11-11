import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurAjoutComponent } from './utilisateur-ajout.component';

describe('UtilisateurAjoutComponent', () => {
  let component: UtilisateurAjoutComponent;
  let fixture: ComponentFixture<UtilisateurAjoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UtilisateurAjoutComponent]
    });
    fixture = TestBed.createComponent(UtilisateurAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
