<template>
  <div id="app">
    <Navbar />
    <div class="flex flex-col md:flex-row">
      <Sidebar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Navbar from './partials/Navbar'
  import Sidebar from './partials/Sidebar'

  export default {
    name: 'App',
    components: {
      Navbar,
      Sidebar
    },
    data() {
      return {
        parts: []
      }
    },
    created() {
      document.title = 'PC Service Dashboard'
    },
  }
</script>

<style>
</style>