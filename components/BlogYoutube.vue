<template>
  <p :class="['blog-youtube', `mt-3`, `mb-3`, 'embed-responsive', `embed-responsive-${ratio}`]">
    <iframe
      width="560"
      height="315"
      :src="`https://www.youtube-nocookie.com/embed/${video}`"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </p>
</template>


<script>
export default {
  props: {
    video: {
      type: String,
      required: true
    },
    ratio: {
      type: String,
      required: false,
      default: '16by9'
    }
  }
}
</script>
