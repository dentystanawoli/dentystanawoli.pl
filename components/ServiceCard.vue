<template>
  <div class="service-card col">
    <div class="card">
      <img class="card-img-top" :src="require(`~/assets/images/oferta/${service.slug}.svg`)" :alt="service.title" width="112" height="112"/>
      <div class="card-header">
        <h5 class="text-center">
          {{ service.title }}
        </h5>
      </div>
      <div class="card-body text-center">
        <nuxt-link class="btn btn-primary text-white" :to="`oferta/${service.slug}`">Dowiedz się więcej</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    service: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>
