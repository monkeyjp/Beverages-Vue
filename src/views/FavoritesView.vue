<script setup>
import Recipe from "@/components/Recipe.vue";
import { useFavoritesStore } from "@/stores/favorites";

const favorites = useFavoritesStore();
</script>

<template>
  <h1 class="text-6xl font-extrabold">Favorites</h1>
  <p v-if="favorites.noFavorites" class="my-10 text-center text-2xl">
    Your Favorites list is Empty
  </p>
  <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
    <Recipe
      v-for="recipe in favorites.favorites"
      :recipe="recipe"
      :key="recipe.idDrink"
    />
  </div>
</template>
