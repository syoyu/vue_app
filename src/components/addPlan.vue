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

    <ul>
      <li v-for="item in displayedlists">
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
      ...mapState(['lists','newPlanCostomer','newPlanDate','newPlanStart','newPlanFinish']),
      ...mapGetters(['getLists']),

      //リスト表示
      displayedlists(){
        return this.getLists
      },
    },
    methods:{
      ...mapMutations(['addPlan','addCostomer','addDate','addStart','addFinish']),
    }
  }


</script>
