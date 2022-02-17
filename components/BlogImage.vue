<template>
  <div class="text-center blog-image mb-3 mt-3">
    <nuxt-img :src="`/images/blog/${src}`" :alt="alt" class="img-fluid"/>
    <figcaption :v-if="caption">{{ caption }}</figcaption>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    caption: {
      type: String,
      default () {
        return ''
      }
    }
  }
}
</script>
