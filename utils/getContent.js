import nuxtConfig from '@/nuxt.config'

export default async($content, params, error) => {
  const currentPage = parseInt(params.page);

  // Set filters.
  const conditions = {};

  if (params.category) {
    conditions.category = { '$regex': [params.category.replace('-', ' '), 'i']}
  }

  // Set how many articles to show per page
  const perPage = nuxtConfig.content.blogPagination || 5;

  const allBlogs = await $content('blog').where(conditions).fetch();

  const totalBlogs = allBlogs.length;

  // use Math.ceil to round up to the nearest whole number
  const lastPage = Math.ceil(totalBlogs / perPage);

  // use the % (modulus) operator to get a whole remainder
  const lastPageCount = totalBlogs % perPage === 0 ? perPage : totalBlogs % perPage;

  const skipNumber = () => {
    if (currentPage === 1) {
      return 0;
    }
    if (currentPage === lastPage) {
      return totalBlogs - lastPageCount;
    }
    return (currentPage - 1) * perPage;
  };

  const paginatedBlogs = await $content('blog')
    .sortBy('createdAt', 'desc')
    .limit(perPage)
    .skip(skipNumber())
    .where(conditions)
    .fetch();

  if (currentPage === 0 || !paginatedBlogs.length) {
    return error({ statusCode: 404, message: 'Nie znaleziono strony!' });
  }

  const blogCategory = paginatedBlogs[0].category;

  return {
    allBlogs,
    paginatedBlogs,
    blogCategory
  };
}
