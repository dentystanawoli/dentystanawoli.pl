<template>
  <div class="navbar-wrapper">
    <b-container>
      <b-navbar sticky toggleable="lg" class="dropdown-menu-left">
        <b-navbar-brand>
          <NuxtLink to="/"><nuxt-img src="/images/logo.svg" alt="Dentysta na Woli" width="291" height="50"/></NuxtLink>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Oferta">
              <b-dropdown-item>
                <nuxt-link to="/oferta">Nasze usługi</nuxt-link>
              </b-dropdown-item>
              <b-dropdown-divider/>
              <b-dropdown-item v-for="service in services" :key="service.path">
                <nuxt-link :to="service.path">{{ service.title }}</nuxt-link>
              </b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="Cennik">
              <b-dropdown-item v-for="pricelist in priceLists" :key="pricelist.path">
                <nuxt-link :to="pricelist.path">{{ pricelist.title }}</nuxt-link>
              </b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item>
              <nuxt-link to="/nasz-zespol">Nasz zespół</nuxt-link>
            </b-nav-item>
            <b-nav-item>
              <nuxt-link to="/blog">Blog</nuxt-link>
            </b-nav-item>
            <b-nav-item>
              <nuxt-link to="/przemiany">Przemiany</nuxt-link>
            </b-nav-item>
            <b-nav-item>
              <nuxt-link to="/pytania-i-odpowiedzi">Pytania i odpowiedzi</nuxt-link>
            </b-nav-item>
            <b-nav-item>
              <nuxt-link to="/kontakt">Kontakt</nuxt-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      priceLists: {},
      services: {},
    }
  },
  async fetch () {
    this.priceLists = await this.$content('cennik', {deep: true}).sortBy('weight').only(['title', 'path']).fetch()
    this.services = await this.$content('oferta', {deep: true}).sortBy('weight').only(['title', 'path']).fetch()
  },
  fetchOnServer: false,
}
</script>
