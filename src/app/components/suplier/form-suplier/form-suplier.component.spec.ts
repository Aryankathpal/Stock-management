import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSuplierComponent } from './form-suplier.component';

describe('FormSuplierComponent', () => {
  let component: FormSuplierComponent;
  let fixture: ComponentFixture<FormSuplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSuplierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSuplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
