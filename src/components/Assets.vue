<template>
    <div class="flex items-center justify-between space-x-2 py-4">
        <img :src="asset.logo" :alt="asset.alt" />
        <div>
            <h3 class="text-2xl">{{ asset.name }}</h3>
            <p class="text-[#7F7D82]">{{ asset.type }}</p>
        </div>
        <div>
            <h3 class="text-2xl">{{ asset.cryptoValue }}</h3>
            <p class="text-[#7F7D82]">{{ asset.usdValue }}</p>
        </div>
        <AddButton />
    </div>
</template>

<script setup>
import AddButton from './AddButton.vue';

const props = defineProps({
    asset: {
        type: Object
    }
})
</script>