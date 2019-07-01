import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfaceComponent } from './iface.component';

describe('IfaceComponent', () => {
  let component: IfaceComponent;
  let fixture: ComponentFixture<IfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
