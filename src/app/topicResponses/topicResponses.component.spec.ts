import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TopicResponsesComponent } from "./topicResponses.component";

describe("TopicResponsesComponent", () => {
  let component: TopicResponsesComponent;
  let fixture: ComponentFixture<TopicResponsesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopicResponsesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicResponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
