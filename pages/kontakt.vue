<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.614598854023!2d20.96088041436269!3d52.23221947120803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecb644cc039a1%3A0xc09d6e4237bf4e5b!2sKlinika%20dentystyczna%20%C5%9Aw.%20Apolonii!5e0!3m2!1spl!2spl!4v1613009147264!5m2!1spl!2spl"
            width="600" height="450" allowfullscreen="" aria-hidden="false"></iframe>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-4">
        <div class="card bg-primary text-white">
          <div class="card-body">
            <h3 class="mb-4 text-white">Dentysta na Woli</h3>
            <dl>

              <dt>Adres</dt>
              <dd>ul. Wolska 81, Warszawa, Wola</dd>

              <dt>Telefon</dt>
              <dd><a href="tel:+48 730 880 881" class="text-white">730 880 881</a></dd>

              <dt>Email</dt>
              <dd><a href="mailto:kontakt@dentystanawoli.pl" class="text-white" target="_blank">kontakt@dentystanawoli.pl</a></dd>
            </dl>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-8">
        <h2 class="mb-3 header-underline">Napisz do nas</h2>

        <div v-if="showMessage" class="alert alert-success alert-dismissible fade show" role="alert">
          Wiadomość została wysłana
        </div>

        <div v-if="showErrorMessage" class="alert alert-danger alert-dismissible fade show" role="alert">
          Wystąpił błąd. Prosimy ponowić próbę lub o kontakt telefoniczny.
        </div>

        <b-form id="contact-form" @submit.prevent="sendForm">
          <div class="form-row">
            <div class="form-group col-lg-6">
              <input type="text" name="name" class="form-control mb-30" placeholder="Imię i nazwisko *" required>
            </div>
            <div class="form-group col-lg-6">
              <input type="email" name="email" class="form-control mb-30" placeholder="Email *" required>
            </div>
          </div>
          <div class="form-group">
            <textarea name="message" rows="8" class="form-control mb-30" placeholder="Wiadomość *" required></textarea>
          </div>

          <VueRecaptcha sitekey="6LcUqbAbAAAAADlC9OQK1JpEfY3Ue85O1bUmzygj" :load-recaptcha-script="true"/>
          <b-button :disabled="formDisabled" variant="primary" type="submit">Wyślij wiadomość</b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import { init, sendForm } from 'emailjs-com'
import VueRecaptcha from 'vue-recaptcha'

export default {
  components: {
    VueRecaptcha
  },
  data () {
    return {
      showMessage: false,
      showErrorMessage: false,
      formDisabled: false,
      errorMessage: false,
    }
  },
  head () {
    return {
      title: 'Kontakt'
    }
  },
  mounted () {
    this.$store.commit('SET_TITLE', 'Kontakt')
  },

  methods: {
    sendForm (e) {
      init('user_mBsHjzNM4ZC0CTQm1inTL')
      sendForm('service_qdgjobh', 'template_jr81w8h', '#contact-form')
        .then(() => {
            this.showMessage = true
            this.formDisabled = true
            this.showErrorMessage = false
          },
          error => {
            this.showErrorMessage = true
            this.errorMessage = error
          })
    },
  }
}
</script>
