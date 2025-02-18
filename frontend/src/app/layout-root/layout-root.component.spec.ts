import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutRootComponent } from './layout-root.component';

describe('LayoutRootComponent', () => {
  let component: LayoutRootComponent;
  let fixture: ComponentFixture<LayoutRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutRootComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
