<script>
import ContentHeadline from '@/components/content/Headline.vue'
import ContentLogo from '@/components/content/Logo.vue'

export default {
  name: 'NotFoundView',
  data() {
    return {
      headline: 'Unbekannte Seite'
    }
  },
  components: {
    ContentHeadline,
    ContentLogo
  }
}
</script>

<template>
  <div>
    <ContentHeadline :value="headline" />
    <ContentLogo />
  </div>
</template>
