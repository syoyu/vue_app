<template>
  <div id="add">

    <p>得意先</p>
    <p><input type="text"
           v-model="newCostomer"
           v-on:keyup.enter="addCostomer(newCostomer)"></p>

    <p>日付</p>
    <p><input type="text"
          v-model="newDate"
          v-on:keyup.enter="addDate(newDate)"></p>

    <p>開始時刻</p>
    <p><input type="text"
          v-model="newStart"
          v-on:keyup.enter="addStart(newStart)"></p>

    <p>終了時刻</p>
    <p><input type="text"
          v-model="newFinish"
          v-on:keyup.enter="addFinish(newFinish)"></p>

    <button v-on:click="addPlan()">
      追加
    </button>


  </div>
</template>

<script>
  import Vue from 'vue'
  import { mapState,mapMutations,mapGetters } from 'vuex'

  export default{
    name: 'add',

    data:function(){
      return{
        //v-modelの入れ物
        newCostomer:'',
        newDate:'',
        newStart:'',
        newFinish:'',
      }
    },

    computed:{
      ...mapState(['events','newPlanCostomer','newPlanDate','newPlanStart','newPlanFinish']),
      ...mapGetters(['getEvents']),
    },
    methods:{
      ...mapMutations(['addPlan','addCostomer','addDate','addStart','addFinish']),
    }
  }


</script>
