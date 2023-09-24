<script>
import ContentSelectList from '@/components/content/SelectList.vue'
import PurposeOfUseConfig from '@/assets/purposeOfUseConfig.json'
import sortObjectsAsc from '@/components/content/sortObjects.js'

export default {
  name: 'ContentPurposeOfUseList',
  data: () => ({
    listName: 'purposeOfUse',
    labelValue: 'Krisengebiet'
  }),
  computed: {
    pruposeOfUseOptions: function () {
      return PurposeOfUseConfig.sort(this.sortObjectsAsc)
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
    key="PurposeOfUseList"
    :listName="listName"
    :labelValue="labelValue"
    :options="pruposeOfUseOptions"
  />
</template>
