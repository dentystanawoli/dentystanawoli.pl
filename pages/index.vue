<template>
  <h1 class="text-center">lorem ipsum</h1>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: '%s',
      title: 'Dentysta na Woli'
    }
  },
  mounted () {
    this.$store.commit('SET_TITLE', false)
  }
}
</script>
