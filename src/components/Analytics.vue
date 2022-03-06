<template>
    <div class="py-20">
        <div class="flex space-x-8 justify-between mb-12">
            <div class="w-2/3">
                <img class="w-full" src="@/assets/analytics-graph.png" alt="Analytics graph" />
            </div>
            <div class="w-1/3 p-10 bg-[#211E23] rounded-xl">
                <p class="font-neue-machina-bold mb-3 text-2xl">Reserve Status</p>
                <p class="mb-12 text-[#7F7D82]">Utilization Rate: 4.97%</p>
                <div class="mb-12 text-center">
                    <img class="mx-auto" src="@/assets/analytics-piechart.png" alt="Pie chart" />
                </div>
                <div class="w-full flex items-center justify-between">
                    <div>
                        <div class="flex items-center space-x-2">
                            <div class="w-4 h-4 rounded-md bg-[#627EEA]"></div>
                            <p>Total Borrowed</p>
                        </div>
                        <p>12,489.93 BTC</p>
                    </div>
                    <div>
                        <div class="flex items-center space-x-2">
                            <div class="w-4 h-4 rounded-md bg-[#627EEA]"></div>
                            <p>Avb Liquidity</p>
                        </div>
                        <p>25,489.93 BTC</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-10 bg-[#211E23] rounded-xl">
            <p class="font-neue-machina-bold mb-8 text-2xl">Market Details</p>
            <div class="flex justify-between space-x-10">
                <div class="flex-1">
                    <div class="flex items-center justify-between mb-6">
                        <p class="text-[#7F7D82]">Price</p>
                        <p>$2,340</p>
                    </div>
                    <div class="flex items-center justify-between mb-6">
                        <p class="text-[#7F7D82]">Market Liquidity</p>
                        <p>1,003,041 BTC</p>
                    </div>
                    <div class="flex items-center justify-between mb-6">
                        <p class="text-[#7F7D82]"># of Suppliers</p>
                        <p>70865</p>
                    </div>
                    <div class="flex items-center justify-between mb-6">
                        <p class="text-[#7F7D82]"># of Borrowers</p>
                        <p>1313</p>
                    </div>
                    <div class="flex items-center justify-between mb-6">
                        <p class="text-[#7F7D82]">BTC Borrow Cap</p>
                        <p>No Limit</p>
                    </div>
                    <div class="flex items-center justify-between mb-6">
                        <p class="text-[#7F7D82]">Interest Paid/Day</p>
                        <p>$8,657.19</p>
                    </div>
                </div>
                <div class="flex-1">
                    <div class="flex items-center justify-between mb-6">
                        <p class="text-[#7F7D82]">Reserves</p>
                        <p>5,896 BTC</p>
                    </div>
                    <div class="flex items-center justify-between mb-6">
                        <p class="text-[#7F7D82]">Reserve factor</p>
                        <p>20%</p>
                    </div>
                    <div class="flex items-center justify-between mb-6">
                        <p class="text-[#7F7D82]">Collateral factor</p>
                        <p>82%</p>
                    </div>
                    <div class="flex items-center justify-between mb-6">
                        <p class="text-[#7F7D82]">xBTC Minted</p>
                        <p>513,908</p>
                    </div>
                    <div class="flex items-center justify-between mb-6">
                        <p class="text-[#7F7D82]">Exchange Rate</p>
                        <p>1 BTC = 49.89871676787 XBTC</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>