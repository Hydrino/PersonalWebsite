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
    },

    WorkData:[
      {
        companyName:"Oyo-Hotels and Homes",
        duration:"July 2019 - Present",
        role:"Software Development Engineer",
        highlights:[
          "Creating robust and reliable software meeting strict client requirements.",
          "Helped drive user engagement with our platform.",
          "Work with variety of software technologies like NodeJS, Vue and more. "
        ]
      },
      {
        companyName:"TAI School",
        duration:"May 2018 - July 2018",
        role:"Android Developer Intern",
        highlights:[
          "Tasked with developing an app for teachers, actively participated in brainstorming it’s features and gave valuable insights.",
          "Single-handedly designed, prototyped and developed the app from scratch.",
          "Work with variety of software technologies like NodeJS, Vue and more. "
        ]
      },
      {
        companyName:"MyCaptain, The Climber",
        duration:"June 2018 - Present",
        role:"Android Development Mentor",
        highlights:[
          "I’m an Android Development Captain on the MyCaptain platform, where I teach and mentor people passionate about creating apps.",
          "I have mentored over 160 students in 4 months since joining.",
        ]
      }
    ]
    
  },
  mutations: {
    
  },
  actions: {

  },
  getters:{
    getName:function(state){
      return state.name;
    },
    getSections:function(state){
      return state.sections;
    },
    getIntroData:function(state){
      return state.IntroData;
    },
    getWorkData(state){
      return state.WorkData;
    }
  }
})
