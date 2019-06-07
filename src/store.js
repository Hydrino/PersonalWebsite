import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: "Ninad Mohite",
    sections: [
      'About', 'Work', 'Projects', 'Contact'
    ],
    aboutData:{
      aboveNameText:"Hey there,",
      nameText:"Ninad Mohite.",
      belowNameText:"One cool thing at a time."
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
    getAboutData:function(state){
      return state.aboutData
    }
  }
})
