<script setup>
import Recipe from "@/components/Recipe.vue";
import { useBeveragesStore } from "@/stores/beverages";

const beverages = useBeveragesStore();
</script>

<template>
  <h1 class="text-6xl font-extrabold">Recipes</h1>
  <p v-if="beverages.noRecipes" class="my-10 text-center text-2xl">
    No Results, Use the form to find recipes
  </p>
  <div
    v-else
    class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10"
  >
    <Recipe
      v-for="recipe in beverages.recipes"
      :recipe="recipe"
      :key="recipe.idDrink"
    />
  </div>
</template>
