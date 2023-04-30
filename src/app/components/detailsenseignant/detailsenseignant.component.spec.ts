import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsenseignantComponent } from './detailsenseignant.component';

describe('DetailsenseignantComponent', () => {
  let component: DetailsenseignantComponent;
  let fixture: ComponentFixture<DetailsenseignantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsenseignantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsenseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
