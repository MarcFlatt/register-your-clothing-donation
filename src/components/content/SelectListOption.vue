<script>
export default {
  name: 'ContentSelectListOption',
  props: ['option']
}
</script>

<template>
  <option :value="option.key">{{ option.value }}</option>
</template>
