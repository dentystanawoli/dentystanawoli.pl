<template>
  <div class="blog-teaser">
    <div class="row">
      <div class="col-12 col-md-6">
        <nuxt-link :to="blog">
          <img class="img-fluid" :alt="blog.title" :src="require(`~/assets/images/blog/${blog.image}`)"/>
        </nuxt-link>
      </div>
      <div class="col-12 col-md-6">
        <h3 class="title">
          <nuxt-link :to="blog">{{ blog.title }}</nuxt-link>
        </h3>
        <div class="teaser">
          <nuxt-content :document="{ body: blog.excerpt }"/>
        </div>
        <div class="footer">
          <span class="published"><b-icon-clock variant="primary" /> {{ created }}</span>
          <span class="category float-right">Kategoria: {{ blog.category }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    created() {
      const date = new Date(this.blog.createdAt)
      return date.toLocaleDateString()
    }
  }
}
</script>
