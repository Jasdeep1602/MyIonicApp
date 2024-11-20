import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListItemPage } from './list-item.page';

describe('ListItemPage', () => {
  let component: ListItemPage;
  let fixture: ComponentFixture<ListItemPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
