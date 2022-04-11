<template>
  <div class="container services mb-5 mt-5">
    <div class="row">
      <div class="col-12">
        <h2 class="text-center header-underline mb-5">Nasze usługi</h2>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
      <ServiceCard v-for="service in services" :key="service.slug" :service="service"/>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    services: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>
