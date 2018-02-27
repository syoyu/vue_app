<template>
  <div id="add">

    <p>施行日</p>
    <p><input type="text"
          v-model="newDate"></p>

    <p>開始時刻</p>
    <p><input type="text"
          v-model="newStart"></p>

    <p>終了予定時刻</p>
    <p><input type="text"
          v-model="newFinish"></p>

    <p>得意先</p>
    <p><input type="text"
           v-model="newCostomer"></p>

    <!-- <p>担当者</p>
    <p><input type="text"
              v-model="newStaff"
              v-on:keyup.enter="addStaff(newStaff)"></p> -->



    <button v-on:click="add()">
      追加
    </button>


  </div>
</template>

<script>
  import Vue from 'vue'
  import { mapState,mapMutations } from 'vuex'

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
      ...mapState(['events']),
    },
    methods:{
      ...mapMutations(['addPlan']),
      add(){
        this.addPlan({
          newPlanCostomer:this.newCostomer,
          newPlanDate:this.newDate,
          newPlanStart:this.newStart,
          newPlanFinish:this.newFinish,
        })
      }
    }
  }


</script>
