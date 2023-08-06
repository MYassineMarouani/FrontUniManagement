import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationclasseComponent } from './creationclasse.component';

describe('CreationclasseComponent', () => {
  let component: CreationclasseComponent;
  let fixture: ComponentFixture<CreationclasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationclasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationclasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
