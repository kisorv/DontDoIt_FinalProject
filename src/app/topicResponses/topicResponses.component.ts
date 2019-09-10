import { Component, OnInit } from "@angular/core";
import { DontdoitService } from "../dontdoit.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-topicResponses",
  templateUrl: "./topicResponses.component.html",
  styleUrls: ["./topicResponses.component.css"]
})
export class TopicResponsesComponent implements OnInit {
  answers: any;
  constructor(
    private dontdoitService: DontdoitService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getTopics(this.route.snapshot.paramMap.get("category"));
  }

  getTopics(category: string) {
    this.dontdoitService.getTopics(category).subscribe(response => {
      this.answers = response;
    });
  }
}
