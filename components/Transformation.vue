<template>
  <div class="col mb-5">
    <h2 class="header-underline mb-3">{{ transformation.title }}</h2>
    <img-comparison-slider>
      <img slot="first" class="img-fluid" :src="transformation.before"/>
      <img slot="second" class="img-fluid" :src="transformation.after"/>
    </img-comparison-slider>
    <nuxt-content :document="transformation" class="mt-3"/>
  </div>
</template>

<script>
export default {
  props: {
    transformation: {
      type: Object,
      default () {
        return {}
      }
    },
  }
}
</script>
