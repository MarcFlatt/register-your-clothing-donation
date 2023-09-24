<script>
import ContentHeadline from '@/components/content/Headline.vue'
import OfficeConfig from '@/assets/officeConfig.json'

export default {
  name: 'LocationView',
  data() {
    return {
      headline: 'Kontakt',
      officeConfig: OfficeConfig
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
    <br />
    <p>{{ officeConfig.name }}</p>

    <p>Telefone: {{ officeConfig.phone }}</p>
    <p>Fax: {{ officeConfig.fax }}</p>
    <p>E-Mail: {{ officeConfig.mail }}</p>

    <p>
      Postanschrift: {{ officeConfig.post.zip }} {{ officeConfig.post.city }},
      {{ officeConfig.post.street }} {{ officeConfig.post.building_no }}
    </p>
    <p>
      Lieferanschrift: {{ officeConfig.zip }} {{ officeConfig.city }}, {{ officeConfig.street }}
      {{ officeConfig.building_no }}
    </p>
  </div>
</template>
