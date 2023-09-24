<script>
import ContentHeadline from '@/components/content/Headline.vue'
import ContentLogo from '@/components/content/Logo.vue'

export default {
  name: 'HomeView',
  data() {
    return { 
      headline: 'Willkommen auf unserer Seite um Kleider zu Spenden' 
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
