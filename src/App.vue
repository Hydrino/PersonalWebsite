<template>
<!-- Gotta wrap inside v-app in order for Vuetify to work! -->
    <v-app>      
        <v-toolbar color="accent" dark flat app >
            <v-toolbar-title >
                <v-btn flat style="font-size:24px" @click="$vuetify.goTo('#Intro')">
                     {{name}}
                </v-btn>               
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <!-- hide if sm and below -->
            <!-- so will only show for larger screens -->
            <v-toolbar-items class="hidden-sm-and-down">  
                <v-btn flat v-for="i in sectionItems.length" v-bind:key="sectionItems[i-1]" @click="$vuetify.goTo('#' + sectionItems[i-1])">{{sectionItems[i-1]}}</v-btn>
                <v-btn outline class="resume_button" color="secondary">Resume</v-btn>
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
                </v-list>
            </v-menu>



        </v-toolbar>

        <!-- <v-content> provides default top padding which has to be removed -->
        <v-content class="pa-0" >
            <Intro id="Intro" />
            <About v-bind:id="sectionItems[0]"/>
            <Work v-bind:id="sectionItems[1]"/>
            <Projects v-bind:id="sectionItems[2]"/>
            <Contact v-bind:id="sectionItems[3]"/>
        </v-content>       
    </v-app>
</template>

<script>

import Intro from "@/components/Intro.vue";
import About from "@/components/About.vue";
import Work from "@/components/Work.vue";
import Projects from "@/components/Projects.vue";
import Contact from "@/components/Contact.vue"

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
        }
    }
}
</script>

<style scoped>
.resume_button{
    padding: 0pt;
    margin: 20px;    
}
</style>