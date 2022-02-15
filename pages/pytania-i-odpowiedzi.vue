<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div v-for="question in questions" :key="question" class="question-and-answer">
          <h3 class="question header-underline">{{ question.title }}</h3>
          <nuxt-content :document="question" class="answer"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({$content}) {
    const questions = await $content('pytania-i-odpowiedzi').sortBy('slug').fetch()
    return {questions}
  },
  data () {
    return {
      questions: {}
    }
  },
  head () {
    return {
      title: 'Pytania i odpowiedzi',
    }
  },
  mounted () {
    this.$store.commit('SET_TITLE', 'Pytania i odpowiedzi')
  }
}
</script>
