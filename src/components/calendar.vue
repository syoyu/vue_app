<template>
  <vue-event-calendar :events="events">
      <template scope="props">
        <div v-for="(event, index) in props.showEvents" class="event-item">
          <!-- In here do whatever you want, make you owner event template -->
          {{ event.title }}<br>
          　　{{event.date}}<br>
          　　{{event.start}}<br>
          　　{{event.finish}}
        </div>
      </template>
    </vue-event-calendar>
</template>

<script>
import Vue from 'vue'
import 'vue-event-calendar/dist/style.css'
import vueEventCalendar from 'vue-event-calendar'
import { mapState ,mapGetters ,mapMutations} from 'vuex'

export default {
    computed:{
      ...mapState(['events']),
      ...mapGetters(['getEvents']),
      displayedevents(){
        return this.getEvents
      },
    },
  }

    Vue.use(vueEventCalendar, {locale: 'en'})



</script>
