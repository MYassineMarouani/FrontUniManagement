import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierenseignantComponent } from './modifierenseignant.component';

describe('ModifierenseignantComponent', () => {
  let component: ModifierenseignantComponent;
  let fixture: ComponentFixture<ModifierenseignantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierenseignantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierenseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
