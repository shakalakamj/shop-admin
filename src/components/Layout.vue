<template>
  <div class="home">
    <v-header></v-header>
    <v-side-menu></v-side-menu>
    <div class="content">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import vHeader from './Header.vue'
  import vSideMenu from './SideMenu.vue'
  export default {
    name: 'layout',
    components: {
      vHeader, vSideMenu
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content {
    background: none repeat scroll 0 0 #fff;
    position: absolute;
    left: 250px;
    right: 0;
    top: 70px;
    bottom: 0;
    width: auto;
    padding: 40px;
    box-sizing: border-box;
    overflow-y: scroll;}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
