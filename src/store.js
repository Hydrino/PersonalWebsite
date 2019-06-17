import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: "Ninad Mohite",
    resumeLink: "https://drive.google.com/open?id=1V8K3YJh6OgVksl1p1GEVwgXnIqqZStnE",
    sections: [
      'About', 'Work', 'Projects', 'Contact'
    ],
    IntroData:{
      aboveNameText:"Hey there,",
      nameText:"Ninad Mohite.",
      belowNameText:"One cool thing at a time."
    },
    AboutData:{
      para1: "Well hello there! I'm Ninad Mohite, a software engineer based in Mumbai, India who loves creating consumer " + 
             "facing applications. I am currently working as a Software Developer in Oyo-Hotels and Home, in Bengaluru. "+
             "In my free time, I like to develop mobile apps and play basketball! ",

      para2:"I have done my graduation from National Institute of Technology, Delhi (NIT Delhi) in Computer Science and " + 
            "Engineering. During my time there, I have learnt and developed many projects encompassing various technologies.",

      techStack:[
        "Android App Development", "Blockchain", "Mobile App Design", "Deep Learning", "FireBase", "VueJS"
      ]
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
    ],
    projectsData:[
      {
        name:"Billy, the Maths Star!",
        description:"Developed an Action on Google (Google Assistant Voice App) called Billy. Billy will ask s" + 
        "imple maths questions for kids to test their knowledge.",
        technologies:[
          "NodeJS", "Actions on Google", "Firebase functions", "Javascript"
        ],
        githubLink:"https://github.com/Hydrino/Billy-the-Maths-star",
        externalLink:null,
        featured:true
      },
      {
        name:"Slide - Wallpaper SlideShow ",
        description:"Wallpaper slideshow app that currently has 90 thousand downloads on the Google Play store.",
        technologies:[
          "Android", "Java", "XML", "Gradle"
        ],
        githubLink:null,
        externalLink:"https://play.google.com/store/apps/details?id=ninhydrin.ninad.com.slide&hl=en_US",
        featured:true
      },
      {
        name:"Doodly",
        description:"Fun app that recognizes doodles drawn by users using Deep Neural Networks.",
        technologies:[
          "Convolutional Neural Nets", "Keras", "Python", "Deep Learning"
        ],
        githubLink:"https://github.com/Hydrino/Doodly",
        externalLink:"https://www.dropbox.com/s/ubs60kel94f89xf/doodly.apk?dl=0",
        featured:true
      },
      {
        name:"Poll",
        description:"Realtime polling app made for my college to get people's opinion on uploaded issues.",
        technologies:[
          "Android", "Firebase Realtime Database", "Kotlin", "RxJava2", "OkHttp3"
        ],
        githubLink:"https://github.com/Hydrino/Poll2",
        externalLink:"https://www.dropbox.com/s/azqfosfw7f46gvo/poll.apk?dl=0",
        featured:false
      },
      {
        name:"Poll2",
        description:"Realtime polling app made for my college to get people's opinion on uploaded issues.",
        technologies:[
          "Android", "Firebase Realtime Database", "Kotlin", "RxJava2", "OkHttp3"
        ],
        githubLink:"https://github.com/Hydrino/Poll2",
        externalLink:"https://www.dropbox.com/s/azqfosfw7f46gvo/poll.apk?dl=0",
        featured:false
      },
      {
        name:"Poll3",
        description:"Realtime polling app made for my college to get people's opinion on uploaded issues.",
        technologies:[
          "Android", "Firebase Realtime Database", "Kotlin", "RxJava2", "OkHttp3"
        ],
        githubLink:"https://github.com/Hydrino/Poll2",
        externalLink:"https://www.dropbox.com/s/azqfosfw7f46gvo/poll.apk?dl=0",
        featured:false
      },
      {
        name:"Poll4",
        description:"Realtime polling app made for my college to get people's opinion on uploaded issues.",
        technologies:[
          "Android", "Firebase Realtime Database", "Kotlin", "RxJava2", "OkHttp3"
        ],
        githubLink:"https://github.com/Hydrino/Poll2",
        externalLink:"https://www.dropbox.com/s/azqfosfw7f46gvo/poll.apk?dl=0",
        featured:false
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
    },
    getProjectsData(state){
      return state.projectsData;
    },
    getResumeLink(state){
      return state.resumeLink;
    },
    getAboutData(state){
      return state.AboutData;
    }
  }
})
