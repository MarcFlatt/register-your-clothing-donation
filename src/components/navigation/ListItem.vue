<script>
// eslint-disable-next-line no-unused-vars
import { RouterLink, RouterView } from 'vue-router'

export default {
  name: 'ListItem',
  props: ['route'],
  components: { RouterLink },
  methods: {
    /**
     * create event routeClicked
     *
     * @return {void}
     */
    handleClickOnRoute() {
      this.$emit('routeClicked', this.route)
    }
  }
}
</script>

<template>
  <li>
    <RouterLink
      :to="route.path"
      :class="this.$route.name === route.name ? 'navigation-link-selected' : 'navigation-link'"
      @click="handleClickOnRoute"
    >
      {{ route.displayName }}
    </RouterLink>
  </li>
</template>
