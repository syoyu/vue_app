<template>
  <v-ons-page>
    <custom-toolbar :title="'News'" :action="toggleMenu"></custom-toolbar>
    <p style="text-align: center">
      Some news here.
    </p>

    <app></app>
  </v-ons-page>
</template>

<script>
  import Vue from 'vue'
  import customToolbar from './toolbar'
  import Msg from './app1.vue'

  Vue.component('app',Msg)

  export default {
    props: ['toggleMenu'],
    components:{customToolbar}
  }
</script>
