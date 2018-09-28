import { Component, OnInit } from "@angular/core";
import { BdService } from "../services/bd.service";

@Component({
  selector: "app-auto",
  templateUrl: "./auto.page.html",
  styleUrls: ["./auto.page.scss"]
})
export class AutoPage implements OnInit {
  autos: any;

  constructor(private db: BdService) {}

  ngOnInit() {
    this.autos = this.db.collection$("auto");
  }

  adicionarAuto(auto) {
    console.log(auto);
  }

  eliminarAuto(auto) {
    console.log(auto);
    // this.db.delete(`autos/${auto.id}`);
  }

}
