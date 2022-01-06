<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h3>Wykonujemy zabiegi medyczne w pełnym zakresie stomatologii dla dzieci i&nbsp;dorosłych</h3>
        <p>Istniejemy od ponad 10 lat, przez cały ten czas dbając o zdrowie i uśmiech naszych Pacjentów na warszawskiej Woli. Naszym atutem jest wspaniała atmosfera i fachowa opieka.</p>
        <p>W naszej Klinice stomatologicznej korzystamy z nowoczesnej technologii, sprzętu medyczno - diagnostycznego i materiałów na wysokim poziomie.</p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h2 class="mt-5 mb-5">Nasze usługi</h2>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
        <ServiceCard v-for="service in services" :key="service.slug" :service="service"/>
    </div>
  </div>
</template>


<script>
export default {
  async asyncData ({$content}) {
    const services = await $content('oferta').sortBy('weight').fetch()
    return {services}
  },
  data () {
    return {
      services: {}
    }
  },
  head () {
    return {
      title: 'Oferta',
    }
  },
  mounted () {
    this.$store.commit('SET_TITLE', 'Oferta')
  }
}
</script>
