<template>
  <div class="navbar-wrapper">
    <b-container>
      <b-navbar sticky="true" toggleable="lg" class="dropdown-menu-left">
        <b-navbar-brand>
          <NuxtLink to="/"><img src="~/assets/images/logo.svg" alt="Dentysta na Woli"/></NuxtLink>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Oferta">
              <b-dropdown-item>
                <nuxt-link to="/oferta">Nasze usługi</nuxt-link>
              </b-dropdown-item>
              <b-dropdown-divider />
              <b-dropdown-item>
                <nuxt-link to="/oferta/profilaktyka-stomatologiczna">Profilaktyka stomatologiczna</nuxt-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <nuxt-link to="/oferta/stomatologia-zachowawcza">Stomatologia Zachowawcza</nuxt-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <nuxt-link to="/oferta/endodoncja">Endodoncja</nuxt-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <nuxt-link to="/oferta/ortodoncja">Ortodoncja</nuxt-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <nuxt-link to="/oferta/wybielanie-zebow">Wybielanie zębów</nuxt-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <nuxt-link to="/oferta/protetyka">Protetyka</nuxt-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <nuxt-link to="/oferta/chirurgia">Chirurgia</nuxt-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <nuxt-link to="/oferta/implanty">Implanty</nuxt-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <nuxt-link to="/oferta/stomatologia-estetyczna">Stomatologia estetyczna</nuxt-link>
              </b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item>
              <nuxt-link to="/nasz-zespol">Nasz zespół</nuxt-link>
            </b-nav-item>
            <b-nav-item>
              <nuxt-link to="/blog">Blog</nuxt-link>
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
