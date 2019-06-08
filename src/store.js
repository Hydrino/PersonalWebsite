import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: "Ninad Mohite",
    sections: [
      'About', 'Work', 'Projects', 'Contact'
    ],
    IntroData:{
      aboveNameText:"Hey there,",
      nameText:"Ninad Mohite.",
      belowNameText:"One cool thing at a time."
    },
    AboutData:{
      introText:"Well hello there! I'm "
    }
    
  },
  mutations: {
    
  },
  actions: {

  },
  getters:{
    getName:function(state){
      return state.name
    },
    getSections:function(state){
      return state.sections
    },
    getIntroData:function(state){
      return state.IntroData
    }
  }
})
