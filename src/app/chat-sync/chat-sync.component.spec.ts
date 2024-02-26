import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSyncComponent } from './chat-sync.component';

describe('ChatSyncComponent', () => {
  let component: ChatSyncComponent;
  let fixture: ComponentFixture<ChatSyncComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatSyncComponent]
    });
    fixture = TestBed.createComponent(ChatSyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
