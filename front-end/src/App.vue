<template>
  <div id="nav" :class="MenuVisble">
    <router-link to="/">Home</router-link>
    <router-link to="/local_multiplayer">One screen Multiplayer</router-link>
    <router-link to="/multiplayer">Network Multiplayer</router-link>
    <router-link to="/deck">Deck Editor</router-link>
  </div>
  <router-view/>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'Hand',
    computed: {
        MenuVisble() {
            if (this.$router.currentRoute.value.path !== '/') {
              return 'hide';
            }
            return '';
        },
    },
};
</script>

<style lang="less">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  overflow: hidden;
}

#nav {
  padding: 30px;
  display: flex;
  flex-direction: column;
  &.hide {
    display: none;
  }
  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 15px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
