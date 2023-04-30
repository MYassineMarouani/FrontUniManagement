import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantnavbarComponent } from './etudiantnavbar.component';

describe('EtudiantnavbarComponent', () => {
  let component: EtudiantnavbarComponent;
  let fixture: ComponentFixture<EtudiantnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtudiantnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
