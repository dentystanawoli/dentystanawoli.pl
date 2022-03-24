<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-8 mb-100">
        <BlogTeaser v-for="blog in paginatedBlogs" :key="blog.slug" :blog="blog"/>
        <BlogCategoryPagination :total="allBlogs.length" :category="category" />
      </div>
      <div class="col-12 col-lg-4">
        <BlogSidebar/>
      </div>
    </div>
  </div>
</template>

<script>
import getContent from '@/utils/getContent'

export default {
  async asyncData ({$content, params, error}) {
    const content = await getContent($content, params, error)

    return {
      allBlogs: content.allBlogs,
      paginatedBlogs: content.paginatedBlogs,
      category: content.blogCategory
    }
  },
  data () {
    return {
      allBlogs: {},
      paginatedBlogs: {},
      category: ''
    }
  },
  head () {
    return {
      title: 'Blog - ' + this.category
    }
  },
  mounted () {
    this.$store.commit('SET_TITLE', 'Blog - ' + this.category)
  },
}
</script>
