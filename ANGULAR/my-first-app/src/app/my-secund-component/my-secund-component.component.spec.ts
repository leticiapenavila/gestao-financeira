import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySecundComponentComponent } from './my-secund-component.component';

describe('MySecundComponentComponent', () => {
  let component: MySecundComponentComponent;
  let fixture: ComponentFixture<MySecundComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MySecundComponentComponent]
    });
    fixture = TestBed.createComponent(MySecundComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
