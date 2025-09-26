import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailWithServiceComponent } from './email-with-service.component';

describe('EmailWithServiceComponent', () => {
  let component: EmailWithServiceComponent;
  let fixture: ComponentFixture<EmailWithServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailWithServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailWithServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
