<template>
  <v-ons-page>
    <custom-toolbar :title="'Settings'" :action="toggleMenu"></custom-toolbar>
    <p style="text-align: center">
      Change the settings.
    </p>

    <add></add>
  </v-ons-page>
</template>

<script>
  import Vue from 'vue'
  import customToolbar from './toolbar'
  import Add from './addPlan.vue'

  

  export default {
    props: ['toggleMenu'],
    components: { customToolbar , Add}
  }
</script>
