import { Component, OnInit } from "@angular/core";

import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Test Recipe",
      "This is a test",
      "https://www.facebook.com/images/fb_icon_325x325.png"
    ),
    new Recipe(
      "Test Recipe",
      "This is a test",
      "https://www.facebook.com/images/fb_icon_325x325.png"
    )
  ];

  constructor() {}

  ngOnInit() {}
}
