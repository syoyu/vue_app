<template>
  <div id="add">
    <p>得意先</p>
    <p><input type="text"
           v-model="newPlanCostomer"
           v-on:keyup.enter="connectCostomer(newPlanCostomer)"></p>

    <p>日付</p>
    <p><input type="text"
          v-model="newPlanDate"
          v-on:keyup.enter="connectDate(newPlanDate)"></p>

    <p>開始時刻</p>
    <p><input type="text"
          v-model="newPlanStart"
          v-on:keyup.enter="connectStart(newPlanStart)"></p>

    <p>終了時刻</p>
    <p><input type="text"
          v-model="newPlanFinish"
          v-on:keyup.enter="connectFinish(newPlanFinish)"></p>

    <button v-on:click="addPlan(newPlanCostomer,newPlanDate,newPlanStart,newPlanFinish)">
      追加
    </button>


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

  export default{
    name: 'add',

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

    methods:{

      connectCostomer: function(newC){
        this.newPlanCostomer = newC;
      },

      connectDate: function(newD){
        this.newPlanDate = newD;
      },

      connectStart: function(newS){
        this.newPlanStart = newS;
      },

      connectFinish: function(newF){
        this.newPlanFinish = newF;
      },

      addPlan: function(newCostomer,newDate,newStart,newFinish){
        this.lists.push({
          title: newCostomer,
          date: newDate,
          start: newStart,
          finish: newFinish
        });
        this.newPlanCostomer = '';
        this.newPlanDate = '';
        this.newPlanStart = '';
        this.newPlanFinish = '';
      },

    },
  }
</script>
