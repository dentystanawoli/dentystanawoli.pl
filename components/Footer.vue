<template>
  <div class="footer-wrapper gradient mt-5">
    <b-container>
      <b-row class="justify-content-center justify-content-md-start">
        <b-col class="contact" cols="11" sm=6 md=6 lg=5 xl=4>
          <b-navbar-brand>
            <NuxtLink to="/"><img src="~/assets/images/logo.svg" alt="Dentysta na Woli"/></NuxtLink>
          </b-navbar-brand>
          <p>
            <a href="https://g.page/DentystanaWoli" target="_blank">
              <b-icon-map-fill scale="0.75"/>
              <span>ul. Wolska 81, Warszawa, Wola</span>
            </a>
          </p>
          <p>
            <a href="tel:+48730880881">
              <b-icon-telephone-fill scale="0.75"/>
              <span>730 880 881</span>
            </a>
          </p>
          <p>
            <a href="mailto:kontakt@dentystanawoli.pl" target="_blank">
              <b-icon-envelope-fill scale="0.75"/>
              <span>kontakt@dentystanawoli.pl</span>
            </a>
          </p>
        </b-col>
        <b-col class="hours" cols=11 sm=6 md=5 lg=4 xl=3>
          <h3 class="mb-3">Godziny otwarcia:</h3>
          <p>Poniedziałek - Piątek <span class="float-right">9.00 - 20.00</span></p>
          <p>Sobota <span class="float-right">9.00 - 13.30</span></p>

        </b-col>
      </b-row>
    </b-container>
    <b-container class="copyright text-center">
      <b-row class="pt-2 pb-1">
        <b-col col="12"><p>Copyright Dentysta na Woli ©{{ year }}</p></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  computed: {
    year () {
      return (new Date).getFullYear()
    }
  }
}
</script>
