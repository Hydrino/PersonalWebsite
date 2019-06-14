<script>

export default {

    computed:{
        projectsData(){
            return this.$store.getters.getProjectsData;
        },
        featuredProjects(){
            return this.projectsData.filter(project=> project.featured===true);
        },
        otherProjects(){
            return this.projectsData.filter(project=> project.featured===false);
        }
        
    }
}
</script>

<template>
    <v-app>
        <v-content class="pa-0"> 
            <v-container class="main_" fluid >
                <v-layout row wrap justify-center>

                    <v-flex offset-md2 offset-lg2 xs12 sm12 md12 lg12 >
                        <span class="section_style display-1 font-weight-bold">Stuff I've built</span><br/><br/>
                    </v-flex>
                
                    <v-layout style="margin-bottom:64px;" row wrap justify-center>

                        <v-flex v-for="project in featuredProjects"  v-bind:key="project.name" xs12 sm12 md4 lg4 xl3 style=" margin:24px;">  
                                   
                            <v-card hover>
                                <v-img  v-bind:src="require('@/assets/demoSC.png')"/>
                                <v-card-text >
                                    <span>{{project.name}}</span><br/>
                                    <span>{{project.description}}</span><br/><br/>                                
                                    <span style="float:right;" v-for="tech in project.technologies" v-bind:key="tech">{{tech }}</span>
                                    <br/>
                                </v-card-text>                                
                                <v-card-actions>
                                    <v-spacer/>
                                    <v-btn v-if="project.externalLink!==null"  icon ripple v-bind:href="project.externalLink" target="_blank">
                                        <v-icon medium color="primary">fas fa-external-link-alt</v-icon>                                        
                                    </v-btn>
                                </v-card-actions>
                            </v-card>        

                        </v-flex>    
                    </v-layout>

                    <v-flex xs12 class="text-xs-center">
                        <span class="headline">Other projects</span><br/><br/><br/>
                    </v-flex>
                   
                    <v-layout row wrap justify-center style="padding-bottom:264px;">
                        <v-flex v-for="project in otherProjects" v-bind:key="project.name" xs6 sm6 md4 lg4 xl3 style=" margin:16px;">

                            <v-card hover>
                                <v-card-title>
                                    <v-layout row >
                                        <v-flex xs6 >
                                            <v-icon large color="primary">far fa-folder-open</v-icon>
                                        </v-flex>

                                        <v-flex xs6  >
                                            <div style="float:right;">
                                                <v-btn icon ripple v-bind:href="project.externalLink" target="_blank">
                                                    <v-icon medium color="primary">fas fa-external-link-alt</v-icon>
                                                </v-btn>
                                            </div>
                                        </v-flex>
                                    </v-layout>                                    
                                </v-card-title>

                                <v-card-text>
                                    <span class="headline">{{project.name}}</span><br/><br/>
                                    <span>{{project.description}}</span><br/><br/>                                    
                                    <span v-for="tech in project.technologies" v-bind:key="tech">{{ "#" + tech + "    "}}</span>
                                   <br/>
                                </v-card-text>

                                
                            </v-card>

                        </v-flex>
                    </v-layout>                  
                    
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<style scoped>

</style>


