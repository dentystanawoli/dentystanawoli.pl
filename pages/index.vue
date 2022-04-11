<template>
  <div>
    <h1 class="text-center">lorem ipsum</h1>
    <Services :services="services"/>
    <LatestBlogs :blogs="blogs"/>
  </div>
</template>

<script>
import LatestBlogs from '@/components/Homepage/LatestBlogs'
import Services from '@/components/Homepage/Services'

export default {
  components: {Services, LatestBlogs},
  async asyncData ({$content}) {
    const blogs = await $content('blog').sortBy('createdAt', 'desc').only(['title', 'excerpt', 'createdAt', 'image', 'category', 'body']).limit(3).fetch()
    const services = await $content('oferta').sortBy('weight').fetch()
    return {blogs, services}
  },
  data () {
    return {
      blogs: {},
      services: {}
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
