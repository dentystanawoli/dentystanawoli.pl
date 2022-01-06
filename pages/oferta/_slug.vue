<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <nuxt-content :document="page"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({$content, params}) {
    const page = await $content('oferta', params.slug).fetch()
    const title = page.title

    return {
      page, title
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
  mounted () {
    this.$store.commit('SET_TITLE', this.title)
  }
}
</script>
