<template>
<!-- Gotta wrap inside v-app in order for Vuetify to work! -->
    <v-app>      
        <v-toolbar color="primary" dark flat app >
            <v-toolbar-title>{{name}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn flat v-for="i in sectionItems.length" v-bind:key="sectionItems[i-1]" @click="$vuetify.goTo('#' + sectionItems[i-1])">{{sectionItems[i-1]}}</v-btn>
                <v-btn outline class="resume_button" color="secondary">Resume</v-btn>
            </v-toolbar-items>
        </v-toolbar>

        <!-- <v-content> provides default top padding which has to be removed -->
        <v-content class="pa-0" >
            <intro/>
            <About v-bind:id="sectionItems[0]"/>
            <Work v-bind:id="sectionItems[1]"/>
            <Projects v-bind:id="sectionItems[2]"/>
            <Contact v-bind:id="sectionItems[3]"/>
        </v-content>       
    </v-app>
</template>

<script>

import intro from "@/components/Intro.vue";
import About from "@/components/About.vue";
import Work from "@/components/Work.vue";
import Projects from "@/components/Projects.vue";
import Contact from "@/components/Contact.vue"

export default {
    components:{    
        intro,
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