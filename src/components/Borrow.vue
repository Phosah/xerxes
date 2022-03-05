<template>
    <div class="max-w-5xl mx-auto py-20 text-sm">
        <div>
            <div class="flex items-center space-x-2 mb-4">
                <p>Borrow Market</p>
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
                        d="M9 5l7 7-7 7"
                    />
                </svg>
                <p>Bitcoin</p>
            </div>
            <div class="flex items-center justify-between mb-10">
                <div class="flex items-center space-x-3">
                    <img src="@/assets/bitcoin.png" alt="Bitcoin" />
                    <p class="text-3xl">Bitcoin</p>
                </div>
                <SupplyBorrowMarketButton />
            </div>
        </div>
        <div class="flex space-x-8">
            <div class="w-3/5 p-8 bg-[#211E23] rounded-md">
                <div class="flex items-center space-x-10 mb-8">
                    <div class="px-8 py-2 rounded-full bg-[#2F2B32]">Borrow</div>
                    <div>Repay</div>
                </div>
                <div class="flex items-center justify-between mb-8">
                    <div class="flex items-center space-x-2">
                        <p>Borrow Limit Left on Xerxes</p>
                        <svg
                            width="15"
                            height="16"
                            viewBox="0 0 15 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6.85859 5.85688H8.28742V4.42804H6.85859V5.85688ZM7.57301 13.7155C4.42243 13.7155 1.85767 11.1507 1.85767 8.00013C1.85767 4.84955 4.42243 2.28479 7.57301 2.28479C10.7236 2.28479 13.2883 4.84955 13.2883 8.00013C13.2883 11.1507 10.7236 13.7155 7.57301 13.7155ZM7.57301 0.855957C6.63482 0.855957 5.70582 1.04075 4.83905 1.39977C3.97228 1.7588 3.18471 2.28504 2.52131 2.94844C1.18152 4.28823 0.428833 6.10538 0.428833 8.00013C0.428833 9.89488 1.18152 11.712 2.52131 13.0518C3.18471 13.7152 3.97228 14.2415 4.83905 14.6005C5.70582 14.9595 6.63482 15.1443 7.57301 15.1443C9.46776 15.1443 11.2849 14.3916 12.6247 13.0518C13.9645 11.712 14.7172 9.89488 14.7172 8.00013C14.7172 7.06194 14.5324 6.13294 14.1734 5.26617C13.8143 4.3994 13.2881 3.61183 12.6247 2.94844C11.9613 2.28504 11.1737 1.7588 10.307 1.39977C9.44019 1.04075 8.51119 0.855957 7.57301 0.855957ZM6.85859 11.5722H8.28742V7.28571H6.85859V11.5722Z"
                                fill="#D7E1F6"
                            />
                        </svg>
                    </div>
                    <p class="text-base">$900.00</p>
                </div>
                <div class="flex items-center justify-between mb-4">
                    <p>Add Collateral from Wallet</p>
                    <div class="flex items-center space-x-4">
                        <p class="text-base">$2000.00</p>
                        <svg
                            width="12"
                            height="8"
                            viewBox="0 0 12 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.41 0.580078L6 5.17008L10.59 0.580078L12 2.00008L6 8.00008L0 2.00008L1.41 0.580078Z"
                                fill="#7F7D82"
                            />
                        </svg>
                    </div>
                </div>
                <div class="p-6 border border-[#323338] rounded-md mb-6">
                    <Collateral />
                    <div class="flex items-center space-x-3 mt-6">
                        <img src="@/assets/plus-icon.png" alt="Add icon" />
                        <p class="text-[#6690FF]">Add Collateral</p>
                    </div>
                </div>
                <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center space-x-2">
                        <p>Combined Borrow Limit</p>
                        <svg
                            width="15"
                            height="16"
                            viewBox="0 0 15 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6.85859 5.85688H8.28742V4.42804H6.85859V5.85688ZM7.57301 13.7155C4.42243 13.7155 1.85767 11.1507 1.85767 8.00013C1.85767 4.84955 4.42243 2.28479 7.57301 2.28479C10.7236 2.28479 13.2883 4.84955 13.2883 8.00013C13.2883 11.1507 10.7236 13.7155 7.57301 13.7155ZM7.57301 0.855957C6.63482 0.855957 5.70582 1.04075 4.83905 1.39977C3.97228 1.7588 3.18471 2.28504 2.52131 2.94844C1.18152 4.28823 0.428833 6.10538 0.428833 8.00013C0.428833 9.89488 1.18152 11.712 2.52131 13.0518C3.18471 13.7152 3.97228 14.2415 4.83905 14.6005C5.70582 14.9595 6.63482 15.1443 7.57301 15.1443C9.46776 15.1443 11.2849 14.3916 12.6247 13.0518C13.9645 11.712 14.7172 9.89488 14.7172 8.00013C14.7172 7.06194 14.5324 6.13294 14.1734 5.26617C13.8143 4.3994 13.2881 3.61183 12.6247 2.94844C11.9613 2.28504 11.1737 1.7588 10.307 1.39977C9.44019 1.04075 8.51119 0.855957 7.57301 0.855957ZM6.85859 11.5722H8.28742V7.28571H6.85859V11.5722Z"
                                fill="#D7E1F6"
                            />
                        </svg>
                    </div>
                    <p class="text-base">$2900.00</p>
                </div>
                <div class="flex items-center space-x-2 mb-6">
                    <div
                        class="w-1/3 h-1 rounded-full bg-gradient-to-tr from-brand-blue-1 to-brand-blue-2"
                    ></div>
                    <p>27%</p>
                    <div class="flex-1 h-1 rounded-full bg-[#2F2B32]"></div>
                </div>
                <div class="mb-4">
                    <p class="mb-3">I want to Borrow</p>
                    <div class="flex items-center space-x-4 p-3 bg-[#2F2B32] rounded-md mb-12">
                        <div class="flex items-center justify-between space-x-10 w-full">
                            <div class="flex items-center space-x-4">
                                <img class="w-7" src="@/assets/bitcoin.png" alt="Binance" />
                                <select name id class="bg-transparent">
                                    <option value>BTC</option>
                                </select>
                            </div>
                            <div class="flex items-center space-x-4 p-2 bg-[#18151A] rounded-md">
                                <input
                                    class="bg-transparent focus-within:outline-none"
                                    type="text"
                                    placeholder="-$10,000.00"
                                />
                                <button class="p-1 rounded-md bg-[#6690FF]">Max</button>
                            </div>
                        </div>
                    </div>
                    <button class="w-full p-4 bg-brand-blue-1 rounded-md">Deposit & Borrow</button>
                </div>
            </div>
            <div class="w-2/5"></div>
        </div>
    </div>
</template>

<script setup>
import SupplyBorrowMarketButton from "./SupplyBorrowMarketButton.vue";
import Collateral from "./Collateral.vue";
</script>>