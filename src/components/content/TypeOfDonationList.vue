<script>
import ContentSelectList from '@/components/content/SelectList.vue'
import TypeOfDonationConfig from '@/assets/typeOfDonationConfig.json'
import sortObjectsAsc from '@/components/content/sortObjects.js'

export default {
  name: 'ContentTypeOfDonationList',
  data: () => ({
    listName: 'typeOfDonation',
    labelValue: 'Art der Kleidung'
  }),
  computed: {
    typeOfDonationOptions: function () {
      return TypeOfDonationConfig.sort(this.sortObjectsAsc)
    }
  },
  components: { ContentSelectList },
  methods: {
    sortObjectsAsc
  }
}
</script>

<template>
  <ContentSelectList
    key="TypeOfDonationList"
    :listName="listName"
    :labelValue="labelValue"
    :options="typeOfDonationOptions"
  />
</template>
