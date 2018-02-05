<template>
  <div id="list">
    <ul>
      <li v-for="item in lists">
        {{ item.title }}<br>
        　　{{item.date}}<br>
        　　{{item.start}}<br>
        　　{{item.finish}}
      </li>
    </ul>

  </div>
</template>

<script>
import Vue from 'vue'



export default {
  name: 'list',

  data:function(){
    return{
      lists:[
        {title:'長崎建設',
         date:'2018/1/10',
         start:'8時',
         finish:'17時',
        },
        {title:'石本建設',
         date:'2018/1/15',
         start:'9時',
         finish:'16時',
        },
      ],
      newPlanCostomer:'',
      newPlanDate:'',
      newPlanStart:'',
      newPlanFinish:'',
    }
  },

  
}
</script>
