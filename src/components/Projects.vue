<script>

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
        projectsData:Object
    }
}
</script>

<template>
    <v-app>
        <v-content class="pa-0"> 
            <v-container class="main_" fluid grid-list-md>
                <v-layout row wrap >

                    <v-flex offset-md2 offset-lg2 offset-xl2 xs12 sm12 md12 lg12 xl12>
                        <span class="section_style display-2 font-weight-bold">Stuff I've built</span>
                        <v-divider color="accent"/><br/><br/>
                    </v-flex>
                    
                
                    <v-layout row wrap justify-center >

                        <v-flex v-for="project in featuredProjects"  style="background:red;" v-bind:key="project.name" xs12 sm6 md6 lg6 xl3 >  
                                   
                            <v-card hover max-width="60%">

                                <v-img  v-bind:src="require('@/assets/demoSC.png')" gradient="rgba(0,0,0,0.6),rgba(0,0,0,0)">
                                    <v-container fluid>
                                        <v-layout row justify-end>
                                        
                                            <v-btn v-if="project.externalLink!==null"  icon ripple v-bind:href="project.externalLink" target="_blank">
                                                <v-icon large color="rgba(255,255,255,.9)">open_in_new</v-icon>                                        
                                            </v-btn>            
     
                                        </v-layout>
                                    </v-container>
                                </v-img>                               
                    
                                <v-card-title>
                                    <span class="headline">{{project.name}}</span><br/>
                                </v-card-title>

                                <v-card-text > 
                                    
                                    <v-container fill-height fluid class="pa-0">
                                        <v-layout row wrap he>
                                            <v-flex xs12 >
                                                <span class="subheading font-weight-light">{{project.description}}</span>
                                            </v-flex>

                                            <v-flex xs12>
                                                <span style=" body-2;" v-for="tech in project.technologies" v-bind:key="tech">{{tech}}</span>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>

                                </v-card-text>     

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


