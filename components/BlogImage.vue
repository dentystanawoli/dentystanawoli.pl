<template>
  <div class="text-center blog-image mb-3 mt-3">
    <img :src="imgSrc()" :alt="alt" class="img-fluid"/>
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
  },
  methods: {
    imgSrc () {
      try {
        return require(`~/assets/images/blog/${this.src}`)
      } catch (error) {
        return null
      }
    }
  }
}
</script>
