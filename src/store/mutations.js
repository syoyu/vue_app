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
};

export const mutations = {
  //予定追加
  addPlan(state,payload){
    state.events.push({
      title: payload.newPlanCostomer,
      date: payload.newPlanDate,
      start: payload.newPlanStart,
      finish: payload.newPlanFinish,
    });
    
    console.log("Completed!!");
  },

  saveTodo(state){
    localStorage.setItem('state.lists', JSON.stringify(state.lists));
  },
};
