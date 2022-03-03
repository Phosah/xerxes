<template>
  <main>
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
    <AllMarketsTable />
  </main>
</template>

<script>
import SupplyBorrowMarketButton from "@/components/SupplyBorrowMarketButton.vue"
import SearchBox from "../components/SearchBox.vue"
import FilterBox from "../components/FilterBox.vue"
import ConnectWalletButton from "../components/ConnectWalletButton.vue"
import AllMarketsTable from "../components/AllMarketsTable.vue"
import MarketAndSupplyTab from "../components/MarketAndSupplyTab.vue"
import BorrowLimit from "../components/BorrowLimit.vue"

export default {
  name: "Home",
  components: {
    SupplyBorrowMarketButton,
    SearchBox,
    FilterBox,
    ConnectWalletButton,
    AllMarketsTable,
    MarketAndSupplyTab,
    BorrowLimit
  }
}
</script>