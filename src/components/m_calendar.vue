<template>
  <div id="calendar">
    <div class="flex main">
      <!-- 前月移動ボタン -->
      <div class="headerItem shiftButton">
        <div class="dateItem border table button" v-on:click="shift('back')">
          <i class="fa fa-caret-left arrow middle" aria-hidden="true"></i>
        </div>
      </div>
      <!-- 年月表示 -->
      <div v-cloak class="headerItem monthYear">
        <div class="dateItem border table">
          <span class="middle">{{year}}年{{padLeft(month)}}月</span>
        </div>
      </div>
      <!-- 次月移動 -->
      <div class="headerItem shiftButton">
        <div class="dateItem border table button" v-on:click="shift('next')">
          <i class="fa fa-caret-right arrow middle" aria-hidden="true"></i>
        </div>
      </div>
    </div>
    <div v-cloak class="flex main">
      <!-- 曜日 -->
      <div class="weekList" v-for="date in weekList">
        <div class="dateItem border">
          <p>{{date}}</p>
        </div>
      </div>
    </div>
    <div v-cloak class="flex main">
      <!-- 日付 -->
      <div class="list" v-for="date in list">
        <div class="dateItem border" v-bind:class="{ notThisMonth: date.isNotThisMonth }">
          <p class="date">{{date.date}}</p>
          <p class="six">{{date.six}}</p>
          <p class="anniv">{{date.anniv}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'calendar',
  data: function(){
    return{
      year:year,
      month:month,
      weekList: ['日','月','火','水','木','金','土'],
      list: row,
    }},
  methods: function(){
    return{
    shift:function(val){
      if('back'===val){
        this.month = (this.month===1)?12:this.month-1;
        this.year = (this.month===12)?this.year-1:this.year;
      }else{
        this.month = (this.month===12)?1:this.month+1;
        this.year = (this.month===1)?this.year+1:this.year;
      }
      this.list = updateRow(this.year,this.month);
    },
    padLeft:function(val){
      return padLeft(val);
    }
  }}
}
</script>
