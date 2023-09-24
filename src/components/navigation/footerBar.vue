<script>
import List from '@/components/navigation/List.vue'

export default {
  name: 'Navigationfooter-bar',
  props: ['routes'],
  components: { List }
}
</script>

<template>
  <div>
    <nav className="footer-bar">
      <List :routes="routes" />
    </nav>
  </div>
</template>

<style>
/*footer bar*/
.footer-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #00a3c0;
}

/*footer bar list*/
.footer-bar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

/*footer bar list elements*/
.footer-bar li,
.footer-bar a {
  float: right;
  color: #ffffff;
  text-align: center;
  margin-right: 5px;
}

/*footer bar list elements on mouse over*/
.footer-bar li a:hover:not(.navigation-link-selected) {
  background-color: #008aa4;
}
</style>
