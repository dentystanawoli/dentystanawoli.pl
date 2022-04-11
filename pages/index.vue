<template>
  <div>
    <Hero/>
    <Services :services="services"/>
    <div class="container mb-5 mt-5">
      <h2 class="text-center header-underline mb-3">Stomatolog na warszawskiej Woli</h2>
      <p>Dentysta na Woli to wyjątkowe miejsce na stomatologicznej mapie Warszawy. Jak profesjonalny gabinet stomatologiczny, od ponad 10 lat
        świadczymy kompleksowe usługi dentystyczne, skierowane zarówno do osób dorosłych, jak i dzieci. Stomatologia nie ma przed nami żadnych
        tajemnic – naszą Klinikę tworzą bowiem doskonale wykwalifikowani specjaliści, dbający nie tylko o wygląd, lecz także zdrowie zębów
        wszystkich naszych pacjentów. Doskonale zdajemy sobie sprawę z tego, że dla wielu osób wizyta u lekarza, jakim jest dentysta, może
        wiązać się z dodatkowym stresem, dlatego każdego dnia dokładamy wszelkich starań, by stworzyć przyjemną, domową atmosferę, sprzyjającą
        wykonywaniu profesjonalnych zabiegów dentystycznych.</p>
    </div>
    <LatestBlogs :blogs="blogs"/>
    <div class="container mb-5 mt-5">
      <h2 class="text-center header-underline mb-3">Dobry dentysta</h2>
      <p>Nasza szeroka oferta obejmuje zróżnicowane zabiegi medyczne, dostosowane do indywidualnych potrzeb pacjenta. Zajmujemy się m.in. endodoncją,
        ortodoncją, protetyką oraz implantologią. Proponujemy również kompleksowe usługi związane ze stomatologią zachowawczą i estetyczną, a także
        opiekę profilaktyczną, polegającą na regularnym uczęszczaniu na kontrole. Podczas nich, nasz dentysta wykonuje zabiegi takie jak skaling,
        piaskowanie czy fluoryzacja. Ponieważ komfort pacjentów jest dla nas priorytetem, nasi stomatolodzy korzystają z zaawansowanego sprzętu
        medyczno-diagnostycznego oraz wysokogatunkowych materiałów dentystycznych.</p>
    </div>
  </div>
</template>

<script>
import LatestBlogs from '@/components/Homepage/LatestBlogs'
import Services from '@/components/Homepage/Services'
import Hero from '@/components/Homepage/Hero'

export default {
  components: {Hero, Services, LatestBlogs},
  async asyncData ({$content}) {
    const blogs = await $content('blog').sortBy('createdAt', 'desc').only(['title', 'excerpt', 'createdAt', 'image', 'category', 'body']).limit(3).fetch()
    const services = await $content('oferta').sortBy('weight').fetch()
    return {blogs, services}
  },
  data () {
    return {
      blogs: {},
      services: {}
    }
  },
  head () {
    return {
      titleTemplate: '%s',
      title: 'Dentysta na Woli'
    }
  },
  mounted () {
    this.$store.commit('SET_TITLE', false)
  }
}
</script>
