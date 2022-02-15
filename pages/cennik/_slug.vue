<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <BasicPriceList :price-list-items="basicPriceListItems.body"/>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <PriceListTabs/>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h2 class="header-underline">{{ title }}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <PriceListTable :csv="csv"/>
      </div>
    </div>
    <div class="row">
      <div class="col small">
        <nuxt-content :document="priceListDisclaimer"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  scrollToTop: false,
  async asyncData ({$content, params}) {
    const csv = await $content('csv-cennik', params.slug).fetch()
    const page = await $content('cennik', params.slug).fetch()
    const title = page.title

    const basicPriceListItems = await $content('podstawowy-cennik').only(['body']).fetch()

    const priceListDisclaimer = await $content('disclaimer-cennik').fetch()

    return {
      csv, page, title, basicPriceListItems, priceListDisclaimer
    }
  },
  data () {
    const csv = null
    const page = null
    const title = null
    const basicPriceListItems = null
    const priceListDisclaimer = null
    return {
      csv, page, title, basicPriceListItems, priceListDisclaimer
    }
  },
  head () {
    return {
      title: 'Cennik - ' + this.title,
    }
  },
  mounted () {
    this.$store.commit('SET_TITLE', 'Cennik')
  }
}
</script>
