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

                    <v-flex offset-md2 offset-lg2 offset-xl2 xs12 md8>
                        <v-layout row align-center>
                            <div style="display:inline:block;">
                                <span class="font-weight-bold white--text text-capitalize" :class="{
                                    'display-1': $vuetify.breakpoint.smAndDown,
                                    'display-2': $vuetify.breakpoint.mdAndUp,
                                    }" style="opacity:0.9">
                                    Stuff I have built
                                </span>                      
                            </div>
                            <v-flex>
                                <v-divider style="background:var(--v-accent-base); margin-left: 16px;"/>
                            </v-flex>
                        </v-layout>      
                        <br/><br/>                      
                    </v-flex>

                    
                    <v-flex xs12> 
                        <FeaturedProjects v-bind:featuredProjects="featuredProjects"/>
                    </v-flex>

                    <v-flex class="text-xs-center" xs12 style="margin-top:64px;">
                        <span class="font-weight-bold text-uppercase "
                            :class=" $vuetify.breakpoint.xsOnly? 'title' : 'headline' " style="opacity:0.9">
                           Other Projects
                        </span>
                        <br/><br/><br/><br/>
                    </v-flex>  

                    <v-flex xs10 sm10 md8 lg8 xl6 
                        offset-xs1 offset-sm1 offset-md2 offset-lg2 offset-xl3>

                        <v-layout row wrap>

                            <v-flex v-for="project in otherProjects" :key="project.name" xs12 sm6 md6 lg4 xl4>
                                <v-card style="margin:8px;cursor:default;" dark 
                                    color="#455A64" hover flat>

                                    <v-container fluid fill-height>
                                        <v-layout row wrap>                                            

                                            <v-flex xs12 class="text-xs-right">                                              

                                                <v-btn v-if="project.githubLink!==null" icon :href="project.githubLink" target="_blank">
                                                    <v-icon medium color="accent">fab fa-github</v-icon>
                                                </v-btn>

                                                <v-btn v-if="project.externalLink!==null" icon :href="project.externalLink" target="_blank">
                                                    <v-icon medium color="accent">open_in_new</v-icon>
                                                </v-btn>
                                                                                               
                                            </v-flex>

                                            <v-flex xs12 class="text-xs-left">                                              

                                                <v-btn icon disabled>
                                                    <v-icon large color="accent">far fa-folder-open</v-icon>
                                                </v-btn>
                                                <br/>   <br/>                                    
                                            </v-flex>

                                            <v-flex xs12>
                                                <span class="headline font-weight-bold" style="opacity:0.95">
                                                    {{project.name}}
                                                </span>
                                                <br/><br/>
                                            </v-flex>

                                            <v-flex xs12 style="height:156px">
                                                <span style="opacity:0.8;" class="subheading">
                                                    {{project.description}}
                                                </span>
                                                <br/><br/><br/>
                                            </v-flex>

                                            <v-flex xs12 justify-start style="height:40px;overflow:hidden;">
                                                <ul :class="$vuetify.breakpoint.xsOnly? 'caption': 'body-1'"
                                                    style="opacity:0.7;">
                                                    <li v-for="tech in project.technologies" :key="tech">{{tech}}</li>
                                                </ul>
                                            </v-flex>


                                        </v-layout>
                                    </v-container>
                                </v-card>
                            </v-flex>
                        </v-layout>

                    </v-flex>
                    
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
li::before{
    content: none;
}
li {
  float: left;
  margin-right: 16px;
}

</style>


