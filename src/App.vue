<template>
  <div id="app">    
      <router-view/>     
      <tabbar v-show="!$route.meta.fullScreen"/>
  </div>
</template>

<script>
import tabbar from '@/components/TabBar'
export default {
  name: 'app',
  components: {
    tabbar
  }
}
</script>

<style>

</style>
