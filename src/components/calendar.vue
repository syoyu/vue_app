<script>

import Vue from 'vue';

Vue.component('calendar', {
  data: function() {
      return {
        demoEvents: [{
          date: '2016/11/12', // Required
          title: 'Foo' // Required
        }, {
          date: '2016/12/15',
          title: 'Bar',
          desc: 'description',
          customClass: 'disabled highlight' // Custom classes to an calendar cell
        }]
      }
  },
  template: `<vue-event-calendar :events="demoEvents"></vue-event-calendar>`
})

</script>
