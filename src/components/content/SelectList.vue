<script>
import ContentSelectListOption from '@/components/content/SelectListOption.vue'

export default {
  name: 'ContentSelectList',
  props: ['listName', 'labelValue', 'options'],
  components: { ContentSelectListOption }
}
</script>

<template>
  <label :for="listName">{{ labelValue }}: </label>
  <select required :name="listName" :id="listName" defaultValue="" value="">
    <option value="" disabled hidden>Wählen</option>
    <ContentSelectListOption v-for="option in options" :key="option.key" :option="option" />
  </select>
</template>
