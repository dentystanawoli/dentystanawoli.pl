<template>
  <div class="blog-categories">
    <h4>Kategorie</h4>
    <ul>
      <li v-for="category in categories" :key="category"><nuxt-link :to="`blog/kategoria/${category.replace(/\s+/g, '-').toLowerCase()}`">{{ category }}</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      categories: {},
    }
  },
  async fetch () {
    const articles = await this.$content('blog', {deep: true}).sortBy('weight').only(['category']).fetch()
    this.categories = [...new Set(articles.map((item) => {
      return item.category
    }))]

  },
  fetchOnServer: false,
}
</script>
