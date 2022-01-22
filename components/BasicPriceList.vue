<template>
  <div class="basic-price-list">
    <p v-for="priceListItem in priceListItems" :key="priceListItem.item" class="lead">{{ priceListItem.item }} <span class="text-primary font-weight-bold">{{ priceListItem.price }} zł</span></p>
  </div>
</template>

<script>
export default {
  props: {
    priceListItems: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
