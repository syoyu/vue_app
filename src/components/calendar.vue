<script>

import Vue from 'vue';

Vue.component('calendar', {
  data: function() {
      return {
        demoEvents: [{
          date: '2017/12/5', // Required
          title: 'Foo' // Required
        }, {
          date: '2017/12/15',
          title: 'Bar',
          desc: 'description',
          customClass: 'disabled highlight' // Custom classes to an calendar cell
        }]
      }
  },
  template: `<vue-event-calendar :title="title" :events="demoEvents" @dayChanged="handleDayChange"></vue-event-calendar>`
})

</script>
