import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationenseignantComponent } from './creationenseignant.component';

describe('CreationenseignantComponent', () => {
  let component: CreationenseignantComponent;
  let fixture: ComponentFixture<CreationenseignantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationenseignantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationenseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
