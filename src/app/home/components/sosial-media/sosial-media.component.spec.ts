import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SosialMediaComponent } from './sosial-media.component';

describe('SosialMediaComponent', () => {
  let component: SosialMediaComponent;
  let fixture: ComponentFixture<SosialMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SosialMediaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SosialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
