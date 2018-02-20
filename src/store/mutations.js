export const state = {
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

  events: [
  {title:'広島建設',
   date:'2018/2/10',
   start:'8時',
   finish:'17時',
  },
  {title:'石本建設',
   date:'2018/2/15',
   start:'9時',
   finish:'16時',
  },
],
  //一旦入れる入れ物
  newPlanCostomer:'',
  newPlanDate:'',
  newPlanStart:'',
  newPlanFinish:'',
};

export const mutations = {
  //一旦入れとくmethods
  addCostomer(state,payload){
    state.newPlanCostomer = payload;
  },

  addDate(state,payload){
    state.newPlanDate = payload;
  },

  addStart(state,payload){
    state.newPlanStart = payload;
  },

  addFinish(state,payload){
    state.newPlanFinish = payload;
  },

  addPlan(state){
    state.events.push({
      title: state.newPlanCostomer,
      date: state.newPlanDate,
      start: state.newPlanStart,
      finish: state.newPlanFinish,
    });
    state.newPlanCostomer='';
    state.newPlanDate='';
    state.newPlanStart='';
    state.newPlanFinish='';

    console.log("Completed!!");
  },

  saveTodo(state){
    localStorage.setItem('state.lists', JSON.stringify(state.lists));
  },
};
