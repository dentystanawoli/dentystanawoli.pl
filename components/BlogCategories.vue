<template>
  <div class="blog-categories">
    <h4 class="header-underline">Kategorie</h4>
    <ul>
      <li v-for="category in categories" :key="category"><nuxt-link :to="`/blog/kategoria/${category.replace(/\s+/g, '-').toLowerCase()}/strona/1`">{{ category }}</nuxt-link></li>
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
