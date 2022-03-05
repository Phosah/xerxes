<template>
    <div class="flex items-center justify-between mt-5">
        <div class="flex items-center space-x-4">
            <div>
                <img :src="network.logo" :alt="network.alt" />
            </div>
            <div class="flex items-center space-x-2 text-sm">
                <p>{{ network.name }} {{ (network.value) }}</p>
                <img src="@/assets/expand.png" alt="Expand logo" />
            </div>
        </div>
        <div>
            <svg
                class="w-6 h-6 text-[#5FBE91]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                />
            </svg>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    network: {
        type: Object
    }
})
</script>