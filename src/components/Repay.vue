<template>
    <div class>
        <div class="flex items-center space-x-10 mb-8">
            <div>Borrow</div>
            <div class="px-8 py-2 rounded-full bg-[#2F2B32]">Repay</div>
        </div>
        <div class="flex items-center justify-between mb-6">
            <div class="flex items-center space-x-2">
                <input type="checkbox" />
                <div class="flex items-center space-x-2">
                    <label for="wallet">Pay with BTC in your Wallet</label>
                    <img src="@/assets/info.svg" alt="Info" />
                </div>
            </div>
            <div>
                <p>0.234</p>
            </div>
        </div>
        <div class="flex items-center space-x-2 mb-6">
            <input type="checkbox" />
            <div class="flex items-center space-x-2">
                <label for="wallet">Repay with Collateral</label>
                <img src="@/assets/info.svg" alt="Info" />
            </div>
        </div>
        <div class="flex items-center justify-between mb-6">
            <div class="flex items-center space-x-2">
                <input type="checkbox" />
                <div class="flex items-center space-x-2">
                    <label for="wallet">Pay with BTC in your Wallet</label>
                    <img src="@/assets/info.svg" alt="Info" />
                </div>
            </div>
            <div>
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
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </div>
        </div>
        <div class="p-6 border border-[#323338] rounded-md mb-8">
            <Collateral />
            <div class="flex items-center space-x-3 mt-6">
                <img src="@/assets/plus-icon.png" alt="Add icon" />
                <p class="text-[#6690FF]">Add Collateral</p>
            </div>
        </div>

        <div class="mb-4">
            <div class="flex items-center justify-between mb-3">
                <p class>I want to Repay</p>
                <p>My Debt: 0.67</p>
            </div>
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
            <button class="w-full p-4 bg-brand-blue-1 rounded-md">Repay Debt</button>
        </div>
    </div>
</template>

<script setup>
import SupplyBorrowMarketButton from "./SupplyBorrowMarketButton.vue";
import Collateral from "./Collateral.vue";
</script>>