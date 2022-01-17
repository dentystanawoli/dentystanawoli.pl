<template>
  <table class="table pricelist-table">
    <PriceListTableRow v-for="(row, key) in csv.body" :key="key" :row="row" />
  </table>
</template>

<script>
export default {
  props: {
    csv: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>
