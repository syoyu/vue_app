<template>

    <v-ons-page>

      <custom-toolbar :title="'Home'" :action="toggleMenu"></custom-toolbar>
      <p style="text-align: center">
        Welcome home.
      </p>

<!-- カレンダー -->

        <practice></practice>
        <!-- <calendar></calendar> -->


    </v-ons-page>
</template>




<script>
  import Vue from 'vue'
  import customToolbar from './toolbar'
  import Practice from './practice.vue'
  // import Calendar from './m_calendar.vue'

  export default {
    props: ['toggleMenu'],
    components: { customToolbar }
  }

  Vue.component('practice',Practice)
  // Vue.component('calendar',Calendar)

</script>
