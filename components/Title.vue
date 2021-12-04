<template>
  <div v-if="title" class="title-wrapper gradient pt-5 pb-5 text-center">
    <b-container fluid>
      <b-row>
        <b-col cols="12">
          <h1 class="text-white">{{ title }}</h1>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    title: {
      type: String,
      default: null
    }
  },
  computed: {
    ...mapState({
      title: state => state.title
    })
  }
}
</script>
