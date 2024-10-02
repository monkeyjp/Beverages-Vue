<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="bg-slate-800">
    <div class="mx-auto container px-5 py-16">
      <div class="flex justify-between items-center">
        <div>
          <RouterLink :to="{ name: 'home' }">
            <img src="/img/logo.svg" class="w-32" alt="logo" />
          </RouterLink>
        </div>
        <nav class="flex gap-4">
          <RouterLink
            :to="{ name: 'home' }"
            class="text-white uppercase font-bold"
            active-class="text-orange-500"
          >
            Home
          </RouterLink>
          <RouterLink
            :to="{ name: 'favorites' }"
            class="text-white uppercase font-bold"
            active-class="text-orange-500"
          >
            Favorites
          </RouterLink>
        </nav>
      </div>
      <form
        class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
      >
        <div class="space-y-4">
          <label
            for="ingredient"
            class="block text-white uppercase font-extrabold text-lg"
            >Name or Ingredients</label
          >
          <input
            type="text"
            id="ingredient"
            class="p-3 w-full rounded-lg focus:outline-none"
            placeholder="Name or Ingredient: Ex. Vodka, Tequila, etc"
          />
        </div>
        <div class="space-y-4">
          <label
            for="category"
            class="block text-white uppercase font-extrabold text-lg"
            >Category</label
          >
          <select
            id="category"
            class="p-3 w-full rounded-lg focus:outline-none"
          >
            <option value="">-- Select --</option>
          </select>
        </div>
        <input
          type="submit"
          class="bg-orange-800 hover:bg-orange-900 cursor-pointer text-white font-extrabold w-full p-2 rounded-lg uppercase"
          value="Search Recipe"
        />
      </form>
    </div>
  </header>
</template>
