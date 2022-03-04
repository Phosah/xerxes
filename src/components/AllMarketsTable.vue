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
                    <p>{{ market.apr }}%</p>
                    <img class src="@/assets/math-symbols.png" alt="Calculation button" />
                </div>
            </td>
            <td>
                <div class>
                    <p>{{ market.fundsCrypto }}</p>
                    <p class="text-sm">${{ market.fundsUSD }}</p>
                </div>
            </td>
            <td>
                <div class>
                    <p>{{ market.supplyCrypto }}</p>
                    <p class="text-sm">${{ market.supplyUSD }}</p>
                </div>
            </td>
            <td class>
                <SwitchButton />
            </td>
            <td>
                <div class="flex items-center space-x-2">
                    <SupplyButton />
                    <WithdrawButton />
                </div>
            </td>
        </tr>
    </tbody>
</template>

<script setup>
import SupplyButton from "./SupplyButton.vue";
import WithdrawButton from "./WithdrawButton.vue";
import SwitchButton from "./SwitchButton.vue";

const props = defineProps({
    market: {
        type: Object,
    }
})

console.log(props);
</script>