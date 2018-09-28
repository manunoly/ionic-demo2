import { Component, OnInit } from "@angular/core";
import { BdService } from "../../services/bd.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-detalles",
  templateUrl: "./detalles.component.html",
  styleUrls: ["./detalles.component.scss"]
})
export class DetallesComponent implements OnInit {
  auto$;

  constructor(private route: ActivatedRoute, private db: BdService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.auto$ = this.db.doc$(`auto/${id}`);
  }
}
