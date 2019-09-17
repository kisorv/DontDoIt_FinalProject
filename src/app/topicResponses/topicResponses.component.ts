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
  category: string;
  categoryMessage: string;

  constructor(
    private dontdoitService: DontdoitService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getTopics(this.route.snapshot.paramMap.get("category"));
    this.category = this.route.snapshot.paramMap.get("category");
    switch (this.category) {
      case "misspelled":
        this.categoryMessage = "Spell This Right Next Time... ";
        break;
      case "wedding":
        this.categoryMessage = "What NOT To Do At A Wedding...";
        break;
      case "interviews":
        this.categoryMessage = "Things To Never Do At An Interview...";
        break;
      case "firstdate":
        this.categoryMessage = "Don't Do This On Your Next First Date...";
        break;
    }
  }

  getTopics(category: string) {
    this.dontdoitService.getTopics(category).subscribe(response => {
      this.answers = response;
    });
  }

  handleHomeClick() {
    this.dontdoitService.navigateToHome();
  }

  handleTopicsClick() {
    this.dontdoitService.navigateToTopics();
  }
}
