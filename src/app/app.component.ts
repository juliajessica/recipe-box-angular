import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe Box!';
  recipes: Recipe[] = [
    new Recipe('PBJ', ['Bread', 'Jelly', 'Peanut Butter'], 'Spread butter on one side of each slice of bread. Spread peanut butter on unbuttered side of one slice of bread,/ and jelly on the other. Place one slice buttered side down on the griddle. Top with other slice so that peanut butter and jelly are in the middle.', 5),
    new Recipe('Ice Cream', ['Sugar', 'Milk', 'Heavy Whipping Cream', 'Vanilla Extract'], 'Stir sugar, cream, and milk into a saucepan over low heat until sugar has dissolved. Heat just until mix is hot and a small ring of foam appears around the edge.', 2),
    new Recipe('Pizza', ['Dough', 'Sauce', 'Cheese'], 'Roll the dough, put the sauce on the dough and sprinkle cheese on top; bake at 450', 4)
  ];

  ratingRecipe(recipe){
    if(recipe.rating >= 5){
      return 'bg-success';
    } else if(recipe.rating >=3){
      return 'bg-warning';
    } else {
      return 'bg-danger';
    }
  }

  editRecipe(clickedRecipe){
    this.selectedRecipe = clickedRecipe;
    alert("you are editing a recipe");
  }

  selectedRecipe: Recipe = this.recipes[0];

  // completeRecipe(){
  //   alert("Congratulations on completing your recipe!")
  // }

}
