<template>
  <div>
    <h1 class="text-center">lorem ipsum</h1>
    <LatestBlogs :blogs="blogs"/>
  </div>
</template>

<script>
import LatestBlogs from '@/components/Homepage/LatestBlogs'

export default {
  components: {LatestBlogs},
  async asyncData ({$content}) {
    const blogs = await $content('blog').sortBy('createdAt', 'desc').only(['title', 'excerpt', 'createdAt', 'image', 'category', 'body']).limit(3).fetch()
    return {blogs}
  },
  data () {
    return {
      blogs: {}
    }
  },
  head () {
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
