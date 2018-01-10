<template>

    <v-ons-page>

      <custom-toolbar :title="'Home'" :action="toggleMenu"></custom-toolbar>
      <p style="text-align: center">
        Welcome home.
      </p>





    </v-ons-page>
</template>

<!-- <style src="./m_calendar.css"></style> -->
//brach
<script>
  import customToolbar from './toolbar'
  export default {
    props: ['toggleMenu'],
    components: { customToolbar }
  }

  import calendar from './m_calendar'
</script>
