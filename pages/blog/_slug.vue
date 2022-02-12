<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-8 mb-100">
        <img :alt="blog.title" class="img-fluid mb-5" :src="require(`~/assets/images/blog/${blog.image}`)"/>
        <nuxt-content :document="blog" />
      </div>
      <div class="col-12 col-lg-4">
        <BlogSidebar />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({$content, params}) {
    const blog = await $content('blog', params.slug).fetch()
    const title = blog.title

    return {
      blog, title
    }
  },
  data () {
    const blog = null
    const title = null
    return {
      blog, title
    }
  },
  head () {
    return {
      title: this.title,
    }
  },
  mounted () {
    this.$store.commit('SET_TITLE', this.title)
  }
}
</script>
