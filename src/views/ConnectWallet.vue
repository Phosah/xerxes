<template>
    <div class="py-20 px-4">
        <div class="flex items-center space-x-2 mb-8">
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
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
            </svg>
            <p>Back</p>
        </div>
        <h2 class="mb-4 font-neue-machina-bold text-4xl">Connect Wallet</h2>
        <p class="max-w-3xl mb-12 text-[#93959F]">
            By connecting a wallet, you agree to Xerxes’s Term of Service and acknowledges that you have read and understand the Xerxes
            <span
                class="text-white"
            >Protocal Disclaimer</span>
        </p>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <template v-for="(wallet, ix) in walletArray" :key="ix">
                <Wallet :wallet="wallet" :class="bgColor" />
            </template>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"
import Wallet from "../components/Wallet.vue";
import metamask from "../assets/metamask-logo.png";
import walletconnect from "../assets/wallet-connect-logo.png";
import arkane from "../assets/arkane-logo.png";
import binancesc from "../assets/binance-sc-logo.png";
import authereum from "../assets/authereum-logo.png";
import bitski from "../assets/bitski-logo.png";
import formatic from "../assets/formatic-logo.png";
import ledger from "../assets/ledger-logo.png";
import mew from "../assets/mew-logo.png";
import portis from "../assets/portis-logo.png";
import torus from "../assets/torus-logo.png";
import trezor from "../assets/trezor-logo.png";
const walletArray = ref([
    {
        img: metamask,
        alt: "meta mask",
        name: "Metamask"
    },
    {
        img: walletconnect,
        alt: "wallet connect",
        name: "Wallet Connect"
    },
    {
        img: formatic,
        alt: "Formatic",
        name: "Formatic"
    },
    {
        img: portis,
        alt: "Portis",
        name: "Portis"
    },
    {
        img: torus,
        alt: "Torus",
        name: "Torus"
    },
    {
        img: mew,
        alt: "Mew",
        name: "Mew"
    },
    {
        img: binancesc,
        alt: "Binance sc wallet",
        name: "Binance SC Wallet"
    },
    {
        img: arkane,
        alt: "Arkane",
        name: "Arkane"
    },
    {
        img: authereum,
        alt: "Authereum",
        name: "Authereum",
        bgColor: "w-14 h-14 rounded-full bg-[#FFDFDA]"
    },
    {
        img: bitski,
        alt: "Bitski",
        name: "Bitski",
        // bgColor: "w-14 h-14 rounded-full bg-[#E3E3FF]"
    },
    {
        img: trezor,
        alt: "Trezor",
        name: "Trezor",
        bgColor: "w-14 h-14 rounded-full bg-[#958D9A]"
    },
    {
        img: ledger,
        alt: "Ledger",
        name: "Ledger",
        bgColor: "w-14 h-14 rounded-full bg-[#958D9A]"
    },

])
</script>
