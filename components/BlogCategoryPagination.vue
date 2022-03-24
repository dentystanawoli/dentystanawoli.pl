<template>
  <nav aria-label="Nawigacja">
    <ul class="pagination justify-content-center">
      <li v-if="currentPage === 1 && total > perPage" class="page-item disabled">
        <span class="page-link">Pierwsza</span>
      </li>

      <li v-if="currentPage !== 1 && total > perPage" class="page-item">
        <nuxt-link class="page-link" :to="{ name: 'blog-kategoria-category-strona-page', params: { category: category, page: 1 } }">
          Pierwsza
        </nuxt-link>
      </li>

      <li v-if="currentPage > 2" class="page-item">
        <nuxt-link class="page-link" :to="{ name: 'blog-kategoria-category-strona-page', params: { category: category, page: currentPage -1 } }">
          {{ currentPage - 2 }}
        </nuxt-link>
      </li>

      <li v-if="currentPage > 1" class="page-item">
        <nuxt-link class="page-link" :to="{ name: 'blog-kategoria-category-strona-page', params: { category: category, page: currentPage -1 } }">
          {{ currentPage - 1 }}
        </nuxt-link>
      </li>

      <li v-if="total > perPage" class="page-item active">
        <nuxt-link class="page-link" :to="{ name: 'blog-kategoria-category-strona-page', params: { category: category, page: currentPage } }">
          {{ currentPage }}
        </nuxt-link>
      </li>

      <li v-if="currentPage + 1 <= totalPages" class="page-item">
        <nuxt-link class="page-link" :to="{ name: 'blog-kategoria-category-strona-page', params: { category: category, page: currentPage + 1 } }">
          {{ currentPage + 1 }}
        </nuxt-link>
      </li>

      <li v-if="currentPage + 2 <= totalPages" class="page-item">
        <nuxt-link class="page-link" :to="{ name: 'blog-kategoria-category-strona-page', params: { category: category, page: currentPage + 2 } }">
          {{ currentPage + 2 }}
        </nuxt-link>
      </li>

      <li v-if="currentPage === totalPages && total > perPage" class="page-item disabled">
        <span class="page-link">
          Ostatnia
        </span>
      </li>

      <li v-if="currentPage !== totalPages" class="page-item">
        <nuxt-link class="page-link" :to="{ name: 'blog-kategoria-category-strona-page',params: { category: category, page: totalPages }}">
          Ostatnia
        </nuxt-link>
      </li>
    </ul>


  </nav>
</template>

<script>
import nuxtConfig from '@/nuxt.config'

export default {
  props: {
    total: {
      type: Number,
      default: 0,
    },
    perPage: {
      type: Number,
      default: nuxtConfig.content.blogPagination || 5,
    },
    category: {
      type: String,
      default: ''
    }
  },
  computed: {
    totalPages () {
      return Math.ceil(this.total / this.perPage)
    },
    currentPage () {
      return parseInt(this.$route.params.page) || 1
    },
    prevPage () {
      return this.currentPage > 1 ? this.currentPage - 1 : 1
    },
    nextPage () {
      return this.currentPage < this.totalPages
        ? this.currentPage + 1
        : this.totalPages
    },
  },
}
</script>
