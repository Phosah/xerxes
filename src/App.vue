<template>
  <div class="font-grotesk h-full">
    <div class="flex flex-col h-full max-w-7xl mx-auto">
      <header>
        <Navbar />
      </header>
      <main class="flex-1">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script setup>
import Navbar from "@/components/layout/Navbar.vue"

</script>

<style>
@font-face {
  font-family: "NeueMachina";
  font-weight: 300;
  src: local("NeueMachina"), url("./fonts/NeueMachina-Light.otf");
}
@font-face {
  font-family: "NeueMachina";
  font-weight: 500;
  src: local("NeueMachina"), url("./fonts/NeueMachina-Regular.otf");
}
@font-face {
  font-family: "NeueMachina";
  font-weight: 700;
  src: local("NeueMachina"), url("./fonts/NeueMachina-Ultrabold.otf");
}

.font-neue-machina-light {
  font-family: "NeueMachina", sans-serif;
  font-weight: 300;
}
.font-neue-machina-regular {
  font-family: "NeueMachina", sans-serif;
  font-weight: 500;
}
.font-neue-machina-bold {
  font-family: "NeueMachina", sans-serif;
  font-weight: 700;
}
</style>