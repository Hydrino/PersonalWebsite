<script>
import FeaturedProjects from '@/components/FeaturedProjects.vue'

export default {
    computed:{
        featuredProjects(){
            return this.projectsData.filter(project=> project.featured===true);
        },
        otherProjects(){
            return this.projectsData.filter(project=> project.featured===false);
        }
        
    },
    props:{
        projectsData:Array
    },
    components:{
        FeaturedProjects,
    }
}
</script>

<template>
    <v-app>
        <v-content class="pa-0"> 
            <v-container class="main_" fluid >
                <v-layout row wrap >

                    <v-flex offset-md2 offset-lg2 offset-xl2 xs12 >
                        <span class="font-weight-bold white--text" :class="{
                            'display-1': $vuetify.breakpoint.smAndDown,
                            'display-2': $vuetify.breakpoint.mdAndUp,
                        }" style="opacity:0.9">
                            Stuff I have built
                        </span>                      

                    </v-flex>

                    <v-flex xs10 sm10 md8 lg8 xl6 offset-md2 offset-lg2 offset-xl2>
                        <v-divider style="background:var(--v-accent-base)"/>
                        <br/><br/>
                    </v-flex>
                            
                    <v-flex xs12> 
                        <FeaturedProjects v-bind:featuredProjects="featuredProjects"/>
                    </v-flex>
                    
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<style scoped>

</style>


