<template>
    <table class="table-fixed w-full divide-y-2 divide-[#232532] divide-opacity-70 text-left">
        <thead class>
            <tr class="h-20">
                <th>Assets</th>
                <th>APR</th>
                <th>Available Funds</th>
                <th>My Supply</th>
                <th class>Collateral</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr class="h-20">
                <td>
                    <div class="flex items-center space-x-3">
                        <div>
                            <img src="@/assets/btc-logo.png" alt="BTC logo" />
                        </div>
                        <div>
                            <p class="mb-1">Bitcoin</p>
                            <div class="flex items-center space-x-1">
                                <img src="@/assets/green-graph.png" alt="Positive graph" />
                                <p>+22%</p>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="flex items-center space-x-2">
                        <p>45.6%</p>
                        <img
                            class="bg-red-500"
                            src="@/assets/math-symbols.png"
                            alt="Calculation button"
                        />
                    </div>
                </td>
                <td>
                    <div class>
                        <p>0.0050BTC</p>
                        <p>$508.00</p>
                    </div>
                </td>
                <td>
                    <div class>
                        <p>0.0050BTC</p>
                        <p>$508.00</p>
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
    </table>
</template>

<script>
import SupplyButton from "./SupplyButton.vue";
import WithdrawButton from "./WithdrawButton.vue";
import SwitchButton from "./SwitchButton.vue";
export default {
    components: { SupplyButton, WithdrawButton, SwitchButton }
}
</script>
