<script>
import List from '@/components/navigation/List.vue'

export default {
  name: 'NavigationHeaderBar',
  props: ['routes'],
  components: { List }
}
</script>

<template>
  <div>
    <nav className="navigation-bar">
      <List :routes="routes" />
    </nav>
  </div>
</template>

<style>
/*navigation bar*/
.navigation-bar {
  background: #005564;
}

/*navigation bar list*/
.navigation-bar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #00a3c0;
}

/*navigation bar list element*/
.navigation-bar li {
  float: left;
  border-left: 1px solid #005564;
  border-right: 1px solid #005564;
}

/*navigation bar list element which is not selected*/
.navigation-link:hover,
.navigation-link-selected:hover {
  background-color: #008aa4;
}

/*navigation bar list element which is selected*/
.navigation-link-selected {
  background-color: #005564;
}

/*navigation element at navigation bar or overlay menu*/
.navigation-link,
.navigation-link-selected {
  display: block;
  color: #ffffff;
  text-decoration: none;
  text-align: center;
  padding: 1px;
  margin: 5px;
}

/*first element at navigation bar list*/
.navigation-bar li:first-child {
  border-left: none;
}

/*last element at navigation bar list*/
.navigation-bar li:last-child {
  float: right;
  border-right: none;
}
</style>
