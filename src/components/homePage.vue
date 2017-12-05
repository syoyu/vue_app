<template>
    <v-ons-page>
      <custom-toolbar :title="'Home'" :action="toggleMenu"></custom-toolbar>
      <p style="text-align: center">
        Welcome home.
      </p>

      <countUp/>
      <calendar/>
      <div id="app2">
       <calendar></calendar>
      </div>
    </v-ons-page>
</template>
//brach
<script>
  import customToolbar from './toolbar'
  export default {
    props: ['toggleMenu'],
    components: { customToolbar }
  }

  import calendar from './calendar'
  import countUp from './countUp'
</script>
