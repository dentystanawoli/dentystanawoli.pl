<template>
    <tr>
      <td :class="`level-${row.level || 0}`" :colspan="row.price? 1 : 2" v-html="row.item"></td>
      <td class="text-right" v-if="row.price">{{ row.price }} zł</td>
    </tr>
</template>

<script>
export default {
  props: {
    row: {
      type: Object,
      default () {
        return {
          item: '',
          level: 0,
          price: ''
        }
      }
    }
  }
}
</script>
