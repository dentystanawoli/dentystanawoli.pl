<template>
  <div>
    <PriceListTabs/>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Cennik',
    }
  },
  mounted () {
    this.$store.commit('SET_TITLE', 'Cennik')
  }
}
</script>
