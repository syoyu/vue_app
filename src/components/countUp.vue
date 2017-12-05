<template>

<div id="countUp">
	<div v-text="count"></div>
</div>
	
</template>

<script>

import Vue from 'vue';

Vue.component('countUp', {    
  data: function() {
      return {
        count: 0
      }
  },
  template: `<div>
  				<div v-text="count"></div>
  				<button @click="countup">Up</button>
			</div>`,
  methods:{
  	countup: function(){
  		this.count++;
  	}
  }
})

	  
  

</script>