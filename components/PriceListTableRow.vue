<template>
  <tr>
    <td :class="`level-${row.level || 0}`" :colspan="row.price? 1 : 2" v-html="row.item"></td>
    <td v-if="row.price" class="text-right">{{ row.price.replace(/\ - /g, '&nbsp;-&nbsp;') }}&nbsp;zł</td>
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
