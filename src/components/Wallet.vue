<template>
    <div
        class="flex flex-col items-center justify-center h-40 border border-white border-opacity-25 rounded-md"
    >
        <div :class="wallet.bgColor">
            <img class="mb-3" :src="wallet.img" :alt="wallet.alt" />
        </div>
        <p>{{ wallet.name }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    wallet: {
        type: Object
    },
    bgColor: {
        type: String
    }
})
</script>