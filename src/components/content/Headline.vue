<script>
export default {
  name: 'ContentHeadline',
  props: ['value']
}
</script>

<template>
  <h1>{{ value }}</h1>
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>
