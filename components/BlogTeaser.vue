<template>
  <div class="blog-teaser">
    <div class="row">
      <div class="col-12 col-md-6">
        <nuxt-link :to="blog">
          <nuxt-img class="img-fluid" :alt="blog.title" :src="`/images/blog/${blog.image}`"/>
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
          <span class="published"><b-icon-clock variant="primary" /> {{ created(blog) }}</span>
          <span class="category float-right">Kategoria: {{ blog.category }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {created} from '@/utils/blog'

export default {
  props: {
    blog: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    created (blog) {
      return created(blog)
    }
  }
}
</script>
