<template>

    <v-ons-page>

      <custom-toolbar :title="'Home'" :action="toggleMenu"></custom-toolbar>
      <p style="text-align: center">
        Welcome home.
      </p>

<!-- カレンダー -->
        <list></list>
        <calendar></calendar>


    </v-ons-page>
</template>




<script>
  import Vue from 'vue'
  import customToolbar from './toolbar'
// 練習用
  import List from './list.vue'

// カレンダーインポート
  import 'vue-event-calendar/dist/style.css'
  import vueEventCalendar from 'vue-event-calendar'
  import Calendar from './calendar.vue'
  // import Calendar from './m_calendar.vue'

  export default {
    props: ['toggleMenu'],
    components: { customToolbar }
  }

//コンポーネントを登録
  Vue.component('list',List)
  Vue.component('calendar',Calendar)
  Vue.use(vueEventCalendar, {locale: 'en'})

</script>
