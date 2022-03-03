<template>
    <div class="relative h-96 w-full">
        <img class="absolute inset-0 w-full h-full" src="@/assets/hero-photo.png" alt="Hero photo" />
        <div class="flex items-center justify-between h-full max-w-3xl mx-auto">
            <div>
                <div class="flex items-center space-x-1 mb-1">
                    <p>Supply Limit</p>
                    <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>
                <p class="text-5xl font-bold">$0.00</p>
            </div>
            <div
                class="flex items-center justify-center w-40 h-40 rounded-full border-2 border-brand-blue-2"
            >
                <div class="text-center">
                    <p class="mb-1">Net APY</p>
                    <p class="text-2xl font-semibold">80%</p>
                </div>
            </div>

            <div>
                <div class="flex items-center space-x-1 mb-1">
                    <p>Borrow Limit</p>
                    <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>
                <p class="text-5xl font-bold">$0.00</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>