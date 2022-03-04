<template>
  <main class="py-10">
    <Header />
    <div class="mb-8">
      <BorrowLimit />
    </div>
    <div class="flex justify-center mb-12">
      <SupplyBorrowMarketButton />
    </div>
    <div class="flex items-center justify-between mb-4">
      <div>
        <MarketAndSupplyTab />
      </div>
      <div class="flex items-center justify-end space-x-4">
        <SearchBox />
        <FilterBox />
      </div>
    </div>
    <table class="table-fixed w-full divide-y-2 divide-[#232532] divide-opacity-70 text-left">
      <thead class="font-neue-machina-light">
        <tr class="h-20">
          <th>Assets</th>
          <th>APR</th>
          <th>Available Funds</th>
          <th>My Supply</th>
          <th>Collateral</th>
          <th>Actions</th>
        </tr>
      </thead>
      <AllMarketsTable v-for="(market, ix) in marketArray" :key="ix" :market="market" />
    </table>
  </main>
</template>

<script setup>
import SupplyBorrowMarketButton from "@/components/SupplyBorrowMarketButton.vue"
import SearchBox from "../components/SearchBox.vue"
import FilterBox from "../components/FilterBox.vue"
import ConnectWalletButton from "../components/ConnectWalletButton.vue"
import AllMarketsTable from "../components/AllMarketsTable.vue"
import MarketAndSupplyTab from "../components/MarketAndSupplyTab.vue"
import BorrowLimit from "../components/BorrowLimit.vue"
import Header from "../components/Header.vue"
import { computed, ref } from "vue"
import btc from "@/assets/btc-logo.png"
import shiba from "@/assets/shiba-logo.png"
import rose from "@/assets/rose-logo.png"
import doge from "@/assets/doge-logo.png"

const marketArray = ref([
  {
    asset: "Bitcoin",
    img: btc,
    assetPercentage: 22,
    apr: 45.6,
    fundsCrypto: "0.0056 BTC",
    fundsUSD: 980.00,
    supplyCrypto: "0.1233 BTC",
    supplyUSD: 550.80
  },
  {
    asset: "Shiba Inu",
    img: shiba,
    assetPercentage: 22,
    apr: 45.6,
    fundsCrypto: "0.0056 SINU",
    fundsUSD: 980.00,
    supplyCrypto: "0.1233 SINU",
    supplyUSD: 550.80
  },
  {
    asset: "Rose",
    img: rose,
    assetPercentage: 22,
    apr: 45.6,
    fundsCrypto: "0.0056 ROSE",
    fundsUSD: 980.00,
    supplyCrypto: "0.1233 ROSE",
    supplyUSD: 550.80
  },
  {
    asset: "Doge",
    img: doge,
    assetPercentage: 22,
    apr: 45.6,
    fundsCrypto: "0.0056 DOGE",
    fundsUSD: 980.00,
    supplyCrypto: "0.1233 DOGE",
    supplyUSD: 550.80
  },
])
</script>