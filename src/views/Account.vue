<template>
    <div class="flex items-center justify-center">
        <div class="max-w-4xl mx-auto p-4 bg-brand-black-1 rounded-md">
            <div class="mb-4 flex justify-end">
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
            <h4 class="mb-4 text-lg">Account</h4>
            <div
                class="flex items-center justify-between space-x-10 p-4 bg-gradient-to-tr from-brand-blue-2 to-brand-blue-1 rounded-md"
            >
                <div>
                    <img src="@/assets/account-photo.png" alt="Account photo" />
                </div>
                <div>
                    <p class="font-neue-machina-light text-sm text-[#EDF4FF]">Balance</p>
                    <h4 class="text-lg">$780,650.98</h4>
                </div>
                <div>
                    <p class="font-neue-machina-light text-sm text-[#EDF4FF]">Wallet</p>
                    <h4 class="text-lg">Wallet Connect</h4>
                </div>
                <div>
                    <p class="font-neue-machina-light text-sm text-[#EDF4FF]">Address</p>
                    <h4 class="text-lg">0xC8efkd839dkd99ke</h4>
                </div>
            </div>
            <div class="mt-8 p-4 rounded-md bg-[#282529]">
                <div class="flex items-center justify-between pb-6 border-b border-[#343541]">
                    <div class="flex items-center space-x-4">
                        <div>
                            <img class="w-6" src="@/assets/metamask-logo.png" alt="Metamask" />
                        </div>
                        <p class="font-neue-machina-regular">7 Networks Connected</p>
                    </div>
                    <svg
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.16675 4.66699L5.00008 0.500325L0.833415 4.66699H9.16675Z"
                            fill="white"
                        />
                    </svg>
                </div>
                <div v-for="(network, ix) in networkArr" :key="ix">
                    <Network :network="network" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"
import Network from './Network.vue';
import ethereum1 from "@/assets/ethereum-logo-1.png"
import arbitrium from "@/assets/arbitrium-logo.png"
import ethereum2 from "@/assets/ethereum-logo-2.png"
import ethereum3 from "@/assets/ethereum-logo-3.png"
import cronos from "@/assets/cronos-logo.png"
import binance from "@/assets/binance-logo.png"
import energi from "@/assets/energi.png"

const networkArr = ref([
    {
        logo: ethereum1,
        alt: "Ethereum",
        name: "Ethereum",
        value: "$56,000.80"
    },
    {
        logo: cronos,
        alt: "Cronos",
        name: "Cronos",
        value: "$56,000.80"
    },
    {
        logo: binance,
        alt: "Binance SC",
        name: "Binance Smart Chain",
        value: "$56,000.80"
    },
    {
        logo: energi,
        alt: "Energi",
        name: "Energi",
        value: "$56,000.80"
    },
    {
        logo: arbitrium,
        alt: "Arbitrium",
        name: "Arbitrium",
        value: "$56,000.80"
    },
    {
        logo: ethereum2,
        alt: "Ethereum",
        name: "Ethereum",
        value: "$56,000.80"
    },
    {
        logo: ethereum3,
        alt: "Ethereum",
        name: "Ethereum",
        value: "$56,000.80"
    },
])

</script>