<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <p>Jesteśmy <strong>zespołem doświadczonych stomatologów</strong> w zakresie <strong>stomatologii zachowawczej, protetyki, chirurgii, ortodoncji i implantologii</strong>. Naszą wiedzę poszerzamy regularnie na kursach i szkoleniach.</p>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col">
        <h2>Poznaj nas</h2>
      </div>
    </div>
    <div class="row">
      <div class="card-group">
        <TeamMember v-for="member in team" :key="member.slug" :member="member"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({$content}) {
    const team = await $content('nasz-zespol').sortBy('weight').fetch()
    return {team}
  },
  data () {
    return {
      team: {}
    }
  },
  head () {
    return {
      title: 'Nasz zespół',
    }
  },
  mounted () {
    this.$store.commit('SET_TITLE', 'Nasz zespół')
  }
}
</script>
