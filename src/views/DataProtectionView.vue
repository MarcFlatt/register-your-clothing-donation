<script>
import ContentHeadline from '@/components/content/Headline.vue'
import Example from '@/assets/example.json'

export default {
  name: 'DataProtectionView',
  data() {
    return {
      headline: 'Datenschutz',
      text: Example.text
    }
  },
  components: {
    ContentHeadline
  }
}
</script>

<template>
  <div>
    <ContentHeadline :value="headline" />
    <p>{{ text }}</p>
  </div>
</template>
