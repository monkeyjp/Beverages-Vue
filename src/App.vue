<script setup>
import { RouterView } from "vue-router";
import Modal from "./components/Modal.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <Header />
  <main class="container mx-auto mt-10">
    <RouterView />
  </main>
  <Modal />
</template>
