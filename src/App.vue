<template>
<!-- Gotta wrap inside v-app in order for Vuetify to work! -->
    <v-app>      
        <v-toolbar color="primary" dark flat app scroll-off-screen>
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
        </v-content>       
    </v-app>
</template>

<script>
import intro from "@/components/Intro.vue";
import About from "@/components/About.vue"
export default {
    components:{    
        intro,
        About
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