<template>
  <div class="container latest-blogs">
    <div class="row">
      <div class="col-12">
        <h3 class="text-center header-underline">Ostatnie wpisy na blogu</h3>
      </div>
    </div>
    <div class="row">
      <div v-for="blog in blogs" :key="blog.slug" class="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
        <div class="latest-blog">
          <nuxt-link :to="blog">
            <nuxt-img class="img-fluid" :alt="blog.title" :src="`/images/blog/${blog.image}`"/>
          </nuxt-link>
          <div class="blog-content">
            <nuxt-link :to="blog">
              <h4 class="blog-title">{{ blog.title }}</h4>
            </nuxt-link>
            <div class="blog-excerpt">
              <nuxt-content :document="{ body: blog.excerpt }"/>
            </div>
            <span class="published"><b-icon-clock variant="primary" /> {{ created(blog) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { created } from '@/utils/blog'

export default {
  props: {
    blogs: {
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
