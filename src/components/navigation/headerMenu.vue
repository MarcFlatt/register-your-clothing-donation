<script>
import List from '@/components/navigation/List.vue'

export default {
  name: 'NavigationHeaderMenu',
  props: ['routes'],
  components: { List },
  methods: {
    /**
     * open the overlay menu
     *
     * @return {void}
     */
    openMenuOverlay() {
      document.getElementById('menuOverlay').style.width = '100%'
    },
    /**
     * close the overlay menu
     *
     * @return {void}
     */
    closeMenuOverlay() {
      document.getElementById('menuOverlay').style.width = '0%'
    },
    /**
     * handle click on route
     *
     * @return {void}
     */
    handleRouteClicked() {
      this.closeMenuOverlay()
    }
  }
}
</script>

<template>
  <div>
    <div id="menuOverlay" className="menu-overlay">
      <div className="overlay-content">
        <ul>
          <li>
            <button type="button" className="close-button" @click="closeMenuOverlay">
              &times;
            </button>
          </li>
          <List :routes="routes" @routeClicked="handleRouteClicked" />
        </ul>
      </div>
    </div>

    <div>
      <nav className="navigation-menu">
        <button type="button" className="navigation-menu-button" @click="openMenuOverlay">
          &#9776;
        </button>
      </nav>
    </div>
  </div>
</template>

<style>
/*navigation menu*/
.navigation-menu {
  background: #005564;
}

/*navigation menu list*/
.navigation-menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #00a3c0;
}

/*navigation menu list element*/
.navigation-menu li {
  float: left;
  border-left: 1px solid #005564;
  border-right: 1px solid #005564;
}

/*navigation menu list element which is not selected*/
.navigation-link:hover,
.navigation-link-selected:hover {
  background-color: #008aa4;
}

/*navigation menu list element which is selected*/
.navigation-link-selected {
  background-color: #005564;
}

/*navigation element at navigation menu or overlay menu*/
.navigation-link,
.navigation-link-selected {
  display: block;
  color: #ffffff;
  text-decoration: none;
  text-align: center;
  padding: 1px;
  margin: 5px;
}

/*navigation menu button to go to overlay menu*/
.navigation-menu-button {
  background-color: #00a3c0;
  color: #ffffff;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  width: 100%;
}

/*navigation menu element of button*/
.navigation-menu li:first-child {
  border-left: none;
  border-right: none;
  width: 100%;
}

/*overlay menu*/
.menu-overlay {
  z-index: 1;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 0;
  overflow-x: hidden;
  background-color: #000000ea;
  transition: 0.8s;
}

/*overlay menu button to close overlay menu*/
.menu-overlay .close-button {
  font-size: 40px;
  color: #ffffff;
  background: none;
  top: 2%;
  right: 5%;
  cursor: pointer;
  padding: 0;
  border: none;
}

/*overlay menu content container*/
.overlay-content {
  position: relative;
  width: 100%;
  margin-top: 20px;
  text-align: center;
}

/*content container list*/
.overlay-content ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

/*content container list element*/
.menu-overlay a {
  padding: 0;
  text-decoration: none;
  color: #ffffff;
  display: block;
}

/*content container list element on focus*/
.menu-overlay a:hover,
.menu-overlay a:focus,
.menu-overlay .close-button:hover,
.menu-overlay .close-button:focus {
  color: #005564;
}

/*on screen with tablet size*/
@media screen and (max-width: 1023px) and (min-width: 768px) {
  /*overlay menu content container*/
  .overlay-content {
    top: 10%;
  }

  /*content container list element*/
  .menu-overlay a {
    padding: 5px;
    font-size: 30px;
  }
}

/*on screen with phone size*/
@media screen and (max-width: 767px) {
  /*overlay menu content container*/
  .overlay-content {
    top: 2%;
  }

  /*content container list element*/
  .menu-overlay a {
    font-size: 25px;
  }
}
</style>
