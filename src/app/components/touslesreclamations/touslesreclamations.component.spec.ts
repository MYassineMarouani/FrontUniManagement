import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouslesreclamationsComponent } from './touslesreclamations.component';

describe('TouslesreclamationsComponent', () => {
  let component: TouslesreclamationsComponent;
  let fixture: ComponentFixture<TouslesreclamationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouslesreclamationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouslesreclamationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
