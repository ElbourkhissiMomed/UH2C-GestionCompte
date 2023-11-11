import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtablissementsListComponent } from './etablissements-list.component';

describe('EtablissementsListComponent', () => {
  let component: EtablissementsListComponent;
  let fixture: ComponentFixture<EtablissementsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtablissementsListComponent]
    });
    fixture = TestBed.createComponent(EtablissementsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
