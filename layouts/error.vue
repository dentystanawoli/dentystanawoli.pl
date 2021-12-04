<template>
  <div class="container mt-5 mb-5">
    <div class="row">
      <div class="col">
        <h2 class="text-primary text-center ">Ups...</h2>
        <p class="text-center">{{ error.message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'error',
  props: {
    error: {
      type: Object,
      default () {
        return {}
      }
    },
  },
  head() {
    return {
      title: this.error.statusCode,
    }
  },
  mounted () {
    this.$store.commit('SET_TITLE', this.error.statusCode)
  }
}
</script>
