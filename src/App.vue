<template>
  <div class="max-w-7xl mx-auto">
    <header class="bg-red-200">
      <Navbar />
    </header>
    <main>
      <Home />
    </main>
    <RouterView />
  </div>
</template>

<script setup>
import Navbar from "@/components/layout/Navbar.vue"
import Home from "./views/Home.vue";
</script>