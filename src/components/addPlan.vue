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
        newCostomer:'',
        newDate:'',
        newStart:'',
        newFinish:'',
      }
    },

    computed:{
      ...mapState(['count','lists','newPlanCostomer','newPlanDate','newPlanStart','newPlanFinish']),
      ...mapGetters(['getLists']),
      displayedlists(){
        return this.getLists
      },
    },
    methods:{
      ...mapMutations(['addPlan','addCostomer','addDate','addStart','addFinish']),
    }
  }
      // mapMutations(['connectCostomer','connectDate','connectStart','connectFinish','addPlan']),


      // connectCostomer: function(newC){
      //   this.newPlanCostomer = newC;
      // },
      //
      // connectDate: function(newD){
      //   this.newPlanDate = newD;
      // },
      //
      // connectStart: function(newS){
      //   this.newPlanStart = newS;
      // },
      //
      // connectFinish: function(newF){
      //   this.newPlanFinish = newF;
      // },
      //
      // addPlan: function(newCostomer,newDate,newStart,newFinish){
      //   this.lists.push({
      //     title: newCostomer,
      //     date: newDate,
      //     start: newStart,
      //     finish: newFinish
      //   });
      //   this.newPlanCostomer = '';
      //   this.newPlanDate = '';
      //   this.newPlanStart = '';
      //   this.newPlanFinish = '';
      // },




</script>
