<template>
  <b-nav pills class="pricelist-tabs">
    <b-nav-item v-for="priceList in priceLists" :key="priceList.slug" :to="priceList.path" :active="$route.path == priceList.path">{{ priceList.title }}</b-nav-item>
  </b-nav>
</template>

<script>
export default {
  data () {
    return {
      priceLists: {},
    }
  },
  async fetch () {
    this.priceLists = await this.$content('cennik', {deep: true}).sortBy('weight').only(['title', 'path']).fetch()
  },
  fetchOnServer: false,
}
</script>
