<template>

    <!-- Gotta wrap inside v-app in order for Vuetify to work! -->
    <v-app >      
        <v-toolbar color="primary" dark app scroll-off-screen scroll-threshold=100>

            <v-toolbar-title >
                <span @click="$vuetify.goTo('#Intro')" style="cursor:pointer;" >{{name}}</span>              
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <!-- hide if sm and below -->
            <!-- so will only show for larger screens -->
            <v-toolbar-items class="hidden-sm-and-down">  
                <v-btn flat v-for="i in sectionItems.length" v-bind:key="sectionItems[i-1]" @click="$vuetify.goTo('#' + sectionItems[i-1])">{{sectionItems[i-1]}}</v-btn>
                <v-btn outline color="secondary" href="https://drive.google.com/open?id=1V8K3YJh6OgVksl1p1GEVwgXnIqqZStnE" target="_blank">Resume</v-btn>
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

                    <v-list-tile href="https://drive.google.com/open?id=1V8K3YJh6OgVksl1p1GEVwgXnIqqZStnE" target="_blank">
                        <v-list-tile-content>
                            <v-list-tile-title >Resume</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-menu>

        </v-toolbar>

        <!-- <v-content> provides default top padding which has to be removed -->
        <v-content class="pa-0" >
            <Intro id="Intro" v-bind:introData="introData" />
            <About v-bind:id="sectionItems[0]" v-bind:name="name"/>
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
        }
    }
}

</script>

<style>
.main_{
    background: var(--v-primary-base);
    color: var(--v-secondary-base);
    padding: 0%;
}
</style>