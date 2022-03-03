<template>
  <div class="h-full bg-brand-black-2 text-white">
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

<script>
import Navbar from "@/components/layout/Navbar.vue"

export default {
  name: "App",
  components: { Navbar }
}
</script>