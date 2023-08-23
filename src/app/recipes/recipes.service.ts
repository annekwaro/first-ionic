import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  // IOC

  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'GRILLED BASIL CHICKEN',
      imageUrl:
        'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      ingredients: [
        '¾ cup balsamic vinegar',
        ' ¼cup tightly packed fresh basil leaves',
        '2 tbsp olive oil',
        '1 garlic clove, minced',
      ],
    },
    {
      id: 'r2',
      title: 'CANTALOUPE GAZPACHO',
      imageUrl:
        'https://images.unsplash.com/photo-1485921325833-c519f76c4927?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80',
      ingredients: [
        '1 medium cantaloupe',
        ' 1 small cucumber',
        '2 tbsp chopped red onion,',
        '2 tsps kosher salt',
      ],
    },
    {
      id: 'r3',
      title: 'GREEN BEANS WITH BACON AND NEW POTATOES',
      imageUrl:
        'https://images.unsplash.com/photo-1624462966581-bc6d768cbce5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      ingredients: [
        '4 slices bacon',
        '1 medium onion',
        '2 lbs fresh green beans',
        '8 small new potatoes,',
        '1/8 tsp salt',
      ],
    },
  ];

  getAllRecipes() {
    return this.recipes;
  }

  getRecipe(recipeId: string) {
    return this.recipes.find((recipe) => {
      return recipe.id === recipeId;
    });
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter((recipe) => {
      return recipe.id !== recipeId;
    });
  }

  constructor() {}
}
