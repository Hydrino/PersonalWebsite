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
    IntroData: {
      aboveNameText: "Hello! I am",
      nameText: "Ninad Mohite.",
      tagLine: 'I build stuff.',
      belowNameText: "I'm a Software Developer currently based in Bangalore, India. I specialize in build" +
          "ing and designing high quality, robust software products. "
    },
    AboutData: {
      para1: "Hello there! I'm Ninad Mohite, a software engineer, currently based in Mumbai who loves creating consumer " +
          "facing applications. I am currently working as a Software Developer in Oyo-Hotels and Home, in Bengaluru. " +
          "In my free time, I like to develop mobile apps and play basketball! ",

      para2: "I have done my graduation from National Institute of Technology, Delhi (NIT Delhi) in Computer Science and " +
          "Engineering. During my time there, I have learnt and developed many projects encompassing various technologies.",

      techStack: [
        "Android App Development", "Actions on Google", "Machine Learning/Deep Learning", "FireBase",
        "Artificial Intelligence", "Blockchain", "Mobile App Designing", "React, VueJS"
      ],

      currentJob: "Oyo-Hotels and Home, in Bengaluru. "
    },

    WorkData: [
      {
        companyName: "OYO - Hotels and Homes",
        duration: "July 2019 - Present",
        role: "Software Development Engineer",
        highlights: [
          "Developed the Frontend for Project Management System (PMS) in React Native, enabling our ground Transformation team to " +
          "efficiently track progress of tasks, track budget allocation and consumption and raise escalations.",
          "Creating robust and reliable software meeting strict requirements for a diverse array of projects.",
          "Working with a variety of different frameworks, languages and platforms.",
          "Effectively communicating across various departments and multi-disciplinary teams."
        ]
      },
      {
        companyName: "TAI School",
        duration: "May 2018 - July 2018",
        role: "Android Developer Intern",
        highlights: [
          "Tasked with developing an app for teachers, actively participated right from the ideation phase.",
          "Designed the app on Sketch and Zeplin with Material Design. ",
          "Single-handedly designed, prototyped and developed the app from scratch."
        ]
      },
      {
        companyName: "MyCaptain, The Climber",
        duration: "June 2018 - Present",
        role: "Android Workshop Mentor",
        highlights: [
          "Mentor students new to Android development on the MyCaptain platform. ",
          "Assign mentees tasks and solve their doubts, while refining their debugging skills.",
          "Mentored 160 students over 4 months uptil now."
        ]
      }
    ],

    projectsData: [
      {
        name: "Billy, the Math Star!",
        description: "Developed an Action on Google (Google Assistant Voice App) named Billy. Billy will ask " +
            "simple math questions for kids to test their knowledge. A fun way for kids to learn while interacting  " +
            " with the Google Assistant.",
        technologies: [
          "DialogFlow API", "Actions on Google", "Firebase Functions", "Javascript"
        ],
        screenshot: 'sc_slide.png',
        githubLink: "https://github.com/Hydrino/Billy-the-Maths-star",
        externalLink: null,
        featured: true
      },
      {
        name: "Slide - Wallpaper SlideShow ",
        description: "Select your favorite images and Slide will set up a slideshow of your images as your phone's wallpaper." +
            " Currently the app has around 90,000 downloads on the Play Store.",
        technologies: [
          "Android", "Material Design", "Java", "XML", "Gradle"
        ],
        screenshot: 'sc_slide.png',
        githubLink: null,
        externalLink: "https://play.google.com/store/apps/details?id=ninhydrin.ninad.com.slide&hl=en_US",
        featured: true
      },
      {
        name: "Doodly",
        description: "Fun app that lets users draw a doodle and then predict what is drawn using Convolutional Neural Nets." +
            " Used Tensorflow Lite API to transfer the model to an Android app. ",
        technologies: [
          "Convolutional Neural Nets", "Tensorflow", "Python", "Deep Learning", "Android"
        ],
        screenshot: 'sc_slide.png',
        githubLink: "https://github.com/Hydrino/Doodly",
        externalLink: "https://www.dropbox.com/s/ubs60kel94f89xf/doodly.apk?dl=0",
        featured: true
      },
      {
        name: "Poll",
        description: "Realtime polling app made for my college to get students' anonymous votes on uploaded issues.",
        technologies: [
          "Android", "Firebase Realtime Database", "Kotlin", "RxJava2", "OkHttp3"
        ],
        githubLink: "https://github.com/Hydrino/Poll2",
        externalLink: "https://www.dropbox.com/s/azqfosfw7f46gvo/poll.apk?dl=0",
        featured: false
      },
      {
        name: "AC-GAN Cifar10",
        description: "A PyTorch implementation of Auxiliary Classifier GAN (acgan) to generate CIFAR10 dataset images. ",
        technologies: [
          "Pytorch", "GANs", "Python", "Deep Neural Nets", "ACGAN"
        ],
        githubLink: "https://github.com/Hydrino/ACGAN_cifar10",
        externalLink: null,
        featured: false
      },
      {
        name: "MailBox",
        description: "Simple Android application that lets users sign up and send letters to each other.",
        technologies: [
          "Android", "SQL Database", "PHP", "Custom components", "Spring Animations"
        ],
        githubLink: "https://github.com/Hydrino/MailBox",
        externalLink: "https://www.dropbox.com/s/0s5j8y64cqyg3rx/mailbox.apk?dl=0",
        featured: false
      },
      {
        name: "AC-GAN MNIST",
        description: "An Auxiliary Classifier GAN (acgan) implementation in PyTorch to generate MNIST digits. ",
        technologies: [
          "Pytorch", "GANs", "Python", "Deep Neural Nets", "ACGAN"
        ],
        githubLink: "https://github.com/Hydrino/ACGAN_mnist",
        externalLink: null,
        featured: false
      },
      {
        name: "Personal Website",
        description: "Developed and designed a landing page for myself using Vue and hosted on Github pages.",
        technologies: [
          "Web development", "Vue", "Vuetify", "Javascript", "HTML", "CSS"
        ],
        githubLink: "https://github.com/Hydrino/PersonalWebsite",
        externalLink: "https://hydrino.github.io/#/",
        featured: false
      }
    ],

    ContactData: {
      title: "Get in touch",
      message: "Always appreciate when someone reaches out to me. Whether it a job opportunity" +
          " or a potential project, or even just to say hi, drop in a mail!",
      email: "ninad.moh@gmail.com"
    },

    footerData: [
      {
        icon: 'fab fa-github',
        link: 'https://github.com/Hydrino',
        title: "Github"
      },
      {
        icon: 'fab fa-twitter',
        link: 'https://twitter.com/NinHydrino',
        title: "Twitter"
      },
      {
        icon: 'fab fa-linkedin',
        link: 'https://www.linkedin.com/in/ninadmohite/',
        title: "LinkedIn"
      },
      {
        icon: 'fab fa-instagram',
        link: 'https://www.instagram.com/_ninhydrin/',
        title: "Instagram"
      },
      {
        icon: 'fab fa-facebook',
        link: 'https://www.facebook.com/ninad.mohite.399',
        title: "Facebook"
      }

    ]

  },
  mutations: {},
  actions: {},
  getters: {
    getName: function (state) {
      return state.name;
    },
    getSections: function (state) {
      return state.sections;
    },
    getIntroData: function (state) {
      return state.IntroData;
    },
    getWorkData(state) {
      return state.WorkData;
    },
    getProjectsData(state) {
      return state.projectsData;
    },
    getResumeLink(state) {
      return state.resumeLink;
    },
    getAboutData(state) {
      return state.AboutData;
    },
    getContactData(state) {
      return state.ContactData;
    },
    getFooterData(state) {
      return state.footerData;
    }
  }
})
