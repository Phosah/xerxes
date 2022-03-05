<template>
    <div class="text-sm">
        <div class="flex items-center justify-between mb-4">
            <p>Collateral 1</p>
            <div class="flex items-center space-x-3">
                <p>Balance: 20.87</p>
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
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                </svg>
            </div>
        </div>
        <div class="flex items-center space-x-4 p-3 bg-[#18151A] rounded-md">
            <div class="flex items-center justify-between space-x-10 w-full">
                <div class="flex items-center space-x-4">
                    <img src="@/assets/binance-logo.png" alt="Binance" />
                    <select name id class="bg-transparent">
                        <option value>BNB</option>
                    </select>
                </div>
                <div class="flex items-center space-x-4 p-2 bg-[#2F2B32] rounded-md">
                    <input
                        class="bg-transparent focus-within:outline-none"
                        type="text"
                        placeholder="-$10,000.00"
                    />
                    <button class="p-1 rounded-md bg-[#6690FF]">Max</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>