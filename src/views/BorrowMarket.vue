<template>
    <div v-if="borrow">
        <Borrow />
    </div>
    <div v-if="analytics">
        <Analytics />
    </div>
</template>

<script setup>
import { ref } from "vue"
import Borrow from "../components/Borrow.vue";
import Analytics from "../components/Analytics.vue";

const analytics = ref(true)
</script>

