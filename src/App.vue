<template>

    <!-- Gotta wrap inside v-app in order for Vuetify to work! -->
    <v-app >   
   
        <v-toolbar color="primary" dark app height="72em" >

            <v-toolbar-title style="color:white;">
                <span @click="$vuetify.goTo('#Intro')" style="cursor:pointer;opacity:0.6;" class="display-1 font-weight-bold">{{name}}</span>              
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <!-- hide if sm and below -->
            <!-- so will only show for larger screens -->
            <v-toolbar-items class="hidden-sm-and-down">  
                <v-btn flat v-for="i in sectionItems.length" v-bind:key="sectionItems[i-1]" @click="$vuetify.goTo('#' + sectionItems[i-1])">{{sectionItems[i-1]}}</v-btn>
                <v-btn outline color="accent" href="https://brittanychiang.com/resume.pdf" target="_blank">Resume</v-btn>
            </v-toolbar-items>

            <!-- for smaller screens we will use menu -->
            <v-menu class="hidden-md-and-up">
                <v-toolbar-side-icon slot="activator">
                    <!-- <v-icon>arrow_downward</v-icon> -->
                </v-toolbar-side-icon>
                <v-list>
                    <v-list-tile v-for="i in sectionItems.length" v-bind:key="sectionItems[i-1]" @click="$vuetify.goTo('#' + sectionItems[i-1])">
                        <v-list-tile-content>
                            <v-list-tile-title>{{ sectionItems[i-1] }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>

                    <v-list-tile href="@/assets/resume.pdf" target="_blank">
                        <v-list-tile-content>
                            <v-list-tile-title >Resume</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-menu>

        </v-toolbar>

        <!-- <v-content> provides default top padding which has to be removed -->
        <v-content class="pa-0">
            <Intro id="Intro" v-bind:introData="introData" />
            <About v-bind:id="sectionItems[0]" v-bind:aboutData="aboutData"/>
            <Work v-bind:id="sectionItems[1]" v-bind:workData="workData"/>
            <Projects v-bind:id="sectionItems[2]" v-bind:projectsData="projectsData"/>
            <Contact v-bind:id="sectionItems[3]"/>
        </v-content>   

        <v-footer dark height="auto" >

            <v-card flat tile width="100%">

                <v-card-text class="text-xs-center">

                    <v-btn   v-for="data in footerData" :key="data.link" class="mx-3 white--text " 
                        icon v-bind:href="data.link" target="_blank" >             
                        <v-hover>               
                            <v-icon medium slot-scope="{hover}" v-bind:color="`${hover? 'secondary' : 'white'}`" >
                                {{ data.icon }}
                            </v-icon>
                        </v-hover>
                        
                    </v-btn>                   
                    
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text class="text-xs-center">
                    Designed and Built by Ninad Mohite.<br/>

                    <v-btn flat icon href="https://github.com/Hydrino/PersonalWebsite" target="_blank">
                        <v-icon color="secondary">fa fa-code-branch</v-icon>
                    </v-btn>

                </v-card-text>

            </v-card>

        </v-footer> 

    </v-app>

</template>


<script>

import Intro from "@/components/Intro.vue";
import About from "@/components/About.vue";
import Work from "@/components/Work.vue";
import Projects from "@/components/Projects.vue";
import Contact from "@/components/Contact.vue";

export default {
    components:{    
        Intro,
        About,
        Work,
        Projects,
        Contact
    },
    computed:{
        name(){
            return this.$store.getters.getName
        },
        sectionItems(){
            return this.$store.getters.getSections
        },
        introData(){
            return this.$store.getters.getIntroData
        },
        resumeLink(){
            return this.$store.getters.getResumeLink
        },
        aboutData(){
            return this.$store.getters.getAboutData
        },
        workData(){
            return this.$store.getters.getWorkData
        },
        projectsData(){
            return this.$store.getters.getProjectsData;
        },
        footerData(){
            return this.$store.getters.getFooterData;
        }
    }
}

</script>

<style>
/* main style/theme of the webpage */
.main_{
    background: var(--v-primary-base);
    color: #b0bec5;
    padding: 0pt;
}

ul {
  list-style: none; /* Remove default bullets */
}

ul li::before {
  content: "\2022";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
  color: var(--v-accent-base); /* Change the color */
  font-weight: bold; /* If you want it to be bold */
  display: inline-block; /* Needed to add space between the bullet and the text */ 
  width: 1em; /* Also needed for space (tweak if needed) */
  margin-left: -1em; /* Also needed for space (tweak if needed) */
}

</style>