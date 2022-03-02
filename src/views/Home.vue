<template>
  <main>
    <SupplyBorrowMarketButton />
    <SearchBox />
    <FilterBox />
  </main>
</template>

<script>
import SupplyBorrowMarketButton from "@/components/SupplyBorrowMarketButton.vue"
import SearchBox from "../components/SearchBox.vue"
import FilterBox from "../components/FilterBox.vue"

export default {
  name: "Home",
  components: {
    SupplyBorrowMarketButton,
    SearchBox,
    FilterBox
  }
}
</script>