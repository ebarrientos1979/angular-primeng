import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintboletasComponent } from './printboletas.component';

describe('PrintboletasComponent', () => {
  let component: PrintboletasComponent;
  let fixture: ComponentFixture<PrintboletasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrintboletasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintboletasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
