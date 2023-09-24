<script>
import ContentHeadline from '@/components/content/Headline.vue'
import Example from '@/assets/example.json'

export default {
  name: 'HelpView',
  data() {
    return {
      headline: 'Hilfe',
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
