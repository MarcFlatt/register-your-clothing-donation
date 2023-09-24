<script>
import ListItem from '@/components/navigation/ListItem.vue'

export default {
  name: 'NavigationList',
  props: ['routes'],
  components: { ListItem },
  methods: {
    /**
     * handle click on route
     *
     * @param {object} route
     * @return {void}
     */
    handleRouteClicked(route) {
      this.$emit('routeClicked', route)
    }
  }
}
</script>

<template>
  <ul>
    <ListItem
      v-for="route in routes"
      :key="route.path"
      :route="route"
      @routeClicked="handleRouteClicked"
    />
  </ul>
</template>
