<template>

    <v-ons-page>

      <custom-toolbar :title="'Home'" :action="toggleMenu"></custom-toolbar>
      <p style="text-align: center">
        Welcome home.
      </p>

      <ul>
        <li v-for="item in displayedlists">
          {{ item.title }}<br>
          　　{{item.date}}<br>
          　　{{item.start}}<br>
          　　{{item.finish}}
        </li>
      </ul>
<!-- カレンダー -->

        <calendar></calendar>


    </v-ons-page>
</template>




<script>
  import Vue from 'vue'
  import customToolbar from './toolbar'

// カレンダーインポート
  import 'vue-event-calendar/dist/style.css'
  import vueEventCalendar from 'vue-event-calendar'
  import Calendar from './calendar.vue'
  import { mapState ,mapGetters ,mapMutations} from 'vuex'


  export default {
    props: ['toggleMenu'],
    components: { customToolbar,
                  Calendar
                },
    computed:{
      ...mapState(['lists']),
      ...mapGetters(['getLists']),
      displayedlists(){
        return this.getLists
      },
    },
  }

  Vue.use(vueEventCalendar, {locale: 'en'})

</script>
