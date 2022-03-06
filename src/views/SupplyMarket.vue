<template>
    <div v-if="supply">
        <Supply />
    </div>
    <div v-if="analytics">
        <Analytics />
    </div>
</template>

<script setup>
import { ref } from "vue"
import Supply from "../components/Supply.vue";
import Analytics from "../components/Analytics.vue";

const supply = ref(true)
</script>

