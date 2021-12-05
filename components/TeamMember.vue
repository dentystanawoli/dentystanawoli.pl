<template>
  <div class="team-member col col-sm-12 col-md-4">
    <div class="card">
      <div class="card-header">
        <p class="card-title">
          {{ member.name }}
        </p>
      </div>

      <div class="list-group list-group-flush">
        <div class="list-group-item specs">{{ this.member.specs.join(', ') }}</div>
        <div class="list-group-item body">
          <nuxt-content :document="member"/>
        </div>
      </div>

      <div class="card-body">
        <span class="card-subtitle"></span>
        <div class="card-text">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    member: {
      type: Object,
      default () {
        return {}
      }
    }
  },
}
</script>
