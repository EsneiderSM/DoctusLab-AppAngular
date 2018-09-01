import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAntiheroesComponent } from './top-antiheroes.component';

describe('TopAntiheroesComponent', () => {
  let component: TopAntiheroesComponent;
  let fixture: ComponentFixture<TopAntiheroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopAntiheroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopAntiheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
