<template>
    <tbody>
        <tr class="h-20">
            <td>
                <div class="flex items-center space-x-3">
                    <div>
                        <img :src="market.img" alt="BTC logo" />
                    </div>
                    <div>
                        <p class="mb-1">{{ market.asset }}</p>
                        <div class="flex items-center space-x-1">
                            <img src="@/assets/green-graph.png" alt="Positive graph" />
                            <p>{{ market.assetPercentage }}%</p>
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div class="flex items-center space-x-2">
                    <p>{{ market.apy }}%</p>
                    <img class src="@/assets/math-symbols.png" alt="Calculation button" />
                </div>
            </td>
            <td>
                <div class>
                    <p>{{ market.liquidity }}</p>
                </div>
            </td>
            <td>
                <div class>
                    <p>{{ market.borrowCrypto }}</p>
                    <p class="text-sm">${{ market.borrowUSD }}</p>
                </div>
            </td>
            <td>
                <div class="flex items-center space-x-2">
                    <BorrowButton />
                    <RepayButton />
                </div>
            </td>
        </tr>
    </tbody>
</template>

<script setup>
import BorrowButton from "./BorrowButton.vue";
import RepayButton from "./RepayButton.vue";

const props = defineProps({
    market: {
        type: Object,
    }
})

console.log(props);
</script>