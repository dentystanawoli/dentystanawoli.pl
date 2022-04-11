<template>
  <div class="container">
    <Transformation v-for="transformation in transformations" :key="transformation.slug" :transformation="transformation"></Transformation>
  </div>
</template>

<script>

export default {
  async asyncData ({$content}) {
    const transformations = await $content('przemiany').sortBy('createdAt', 'desc').fetch()
    return {transformations}
  },
  data () {
    return {
      transformations: {}
    }
  },
  head () {
    return {
      title: 'Przemiany',
    }
  },
  mounted () {
    this.$store.commit('SET_TITLE', 'Przemiany')
  }
}
</script>
