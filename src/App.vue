<template>
<!-- Gotta wrap inside v-app in order for Vuetify to work! -->
    <v-app>      
        <v-toolbar color="primary" dark flat app scroll-off-screen>
            <v-toolbar-title>{{name}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn flat v-for="item in sectionItems" v-bind:key="item">{{item}}</v-btn>
            </v-toolbar-items>
        </v-toolbar>

        <!-- <v-content> provides default top padding which has to be removed -->
        <v-content class="pa-0" >
            <intro/>
        </v-content>

       
    </v-app>
</template>

<script>
import intro from "@/components/Intro.vue";
export default {
    components:{    
        intro
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



