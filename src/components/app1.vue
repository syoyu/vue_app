<template>

  <div id="app">
    <ul>
      <li v-for="item in items">
        <label　v-bind:class="{ done: item.isChecked }">
          <input type="checkbox" v-model="item.isChecked"> {{ item.title }}
        </label>
      </li>
    </ul>

  <p>
    <input type="text"
           placeholder="TODOを入力しましょう！"
           v-model="newItemTitle"
           v-on:keyup.enter="addTodo(newItemTitle)">
  </p>

  <button v-on:click="deleteTodo()">チェック済みの項目を削除する</button>

</div>

</template>

<style>
    .done { text-decoration: line-through; }
</style>

<script>
import Vue from 'vue'

export default {
  name: 'app',
  data: function(){
    return{
      items: [
        { title: '領収書を準備する', isChecked: true },
        { title: 'Vue.jsハンズオンの資料を作る', isChecked: true },
        { title: '参加者の人数を確認する', isChecked: false },
        { title: 'ピザを注文する', isChecked: false },
        { title: '参加費のお釣りを準備する', isChecked: false },
        { title: '会場設営をする', isChecked: false },
      ],
      newItemTitle: '' //追加
    }
  },
  methods: {  //methodsオプションをまるっと追加
    addTodo: function(newTitle){
      this.items.push({
        title: newTitle,
        isChecked: false
      });
      this.newItemTitle = ''; //追加
      this.saveTodo(); //ブラウザに保存
    },

    deleteTodo: function(){
      this.items = this.items.filter(function (item) {
        return item.isChecked === false; //
      });
      this.saveTodo(); //ブラウザに保存
    },

    saveTodo: function(){
      localStorage.setItem('items', JSON.stringify(this.items));
    },

    loadTodo: function(){
      this.items = JSON.parse( localStorage.getItem('items') );
      if( !this.items ){
        this.items = [];
      }
    },
  },

  mounted: function(){
    this.loadTodo();
  },
}

</script>
