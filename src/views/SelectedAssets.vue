<template>
    <div class="flex items-center justify-center py-20">
        <div class="w-full max-w-2xl mx-auto p-8 bg-brand-black-1 rounded-md">
            <div class="mb-4 flex items-center justify-between">
                <h4 class="mb-4 text-3xl">Select Assets</h4>
                <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                    />
                </svg>
            </div>
            <div class="my-8 p-4 rounded-md bg-[#282529]">
                <div class="py-6 text-center">
                    <p class="font-neue-machina-regular text-sm mb-2">Collaterral Value Selected</p>
                    <p class="text-3xl">$17,650.00</p>
                </div>
            </div>
            <div v-for="(asset, ix) in assetsArr" :key="ix">
                <Assets :asset="asset" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"
import Assets from "../components/Assets.vue";
import ada from "@/assets/ada-logo.png"
import dot from "@/assets/dot-logo.png"
import usdt from "@/assets/usdt-logo.png"
import binance from "@/assets/bnb-logo.png"
import ethereum from "@/assets/eth-logo.png"

const assetsArr = ref([
    {
        logo: ada,
        alt: "ada",
        name: "ADA",
        type: "My wallet",
        cryptoValue: "340.45",
        usdValue: "$6,000.80",
    },
    {
        logo: dot,
        alt: "dot",
        name: "DOT",
        type: "Supply",
        cryptoValue: "657.45",
        usdValue: "$-7,500.80",
    },
    {
        logo: usdt,
        alt: "usdt",
        name: "USDT",
        type: "Supply",
        cryptoValue: "0.0945",
        usdValue: "$-6,060.80",
    },
    {
        logo: ethereum,
        alt: "ethereum",
        name: "ETH",
        type: "My wallet",
        cryptoValue: "2.45",
        usdValue: "$2,400.80",
    },
    {
        logo: binance,
        alt: "binance",
        name: "BNB",
        type: "My wallet",
        cryptoValue: "0.85",
        usdValue: "$2,760.80",
    },
])

</script>