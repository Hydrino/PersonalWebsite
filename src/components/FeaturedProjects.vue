<script>
export default {
    props:{
        featuredProjects:Array
    },
   methods:{
       styleObject: function (idx) {
           return {
                'text-align' : idx%2===1? 'start' : 'end' ,
                'margin-left' : idx%2===1? '0px' : '-64px',
                'margin-right' : idx%2===1? '-64px' : '0px',
                'width' : '40%',
                'z-index' : 1,
                'background' : 'transparent',
           }
       },
       listStyleObj(idx){
           return{
                'float' : idx%2===1? 'left' : 'right',
                'margin-left' : idx%2===1? '0px' : '16px',
                'margin-right' : idx%2===1? '16px' : '0px',
                'color': 'white',
                'opacity': 0.8, 

           }
       }
   }
}
</script>

<template>
    
    <v-app>
        <v-content class="pa-0">
            <v-container class="main_" fluid>

                <v-layout row wrap justify-center> 

                   <v-flex v-for="(project,idx) in featuredProjects" 
                        v-bind:key="project.name" xs12 sm10 md8 lg8 xl8 align-content-center >
                       
                       <v-card color="transparent" flat >

                           <v-parallax v-if=$vuetify.breakpoint.xsOnly 
                                :src="require('@/assets/demoSC.png')" 
                                style="margin:16px;">

                                <v-layout align-center> 

                                   <div style="background:transparent;" 
                                   :style="{'text-align' : idx%2===0? 'end' : 'start'}">

                                        <span class="accent--text font-weight-bold text-uppercase caption"
                                                style="font-family: 'Monda', sans-serif;">
                                            Featured Project
                                        </span>
                                        <br/>

                                        <span class="headline font-weight-bold">{{project.name}}</span>
                                        <br/><br/>

                                        <v-card color="secondary" tile dark>
                                            <v-card-text>
                                                <span >{{project.description}}</span>
                                            </v-card-text>
                                        </v-card>
                                        <br/>
                                        
                                        <ul>
                                            <li v-for="tech in project.technologies" :key="tech">{{tech}}</li>
                                        </ul>
                                        <br/>                                  

                                    </div>                               
                                </v-layout>

                                <div :style="{'text-align' : idx%2===0? 'end' : 'start'}" 
                                    style="padding-bottom:16px;">

                                    <v-btn v-if="project.githubLink!==null" icon 
                                    :href="project.githubLink" target="_blank"
                                    small>
                                        <v-icon color="accent">fab fa-github</v-icon>
                                    </v-btn>

                                    <v-btn v-if="project.externalLink!==null" icon 
                                    :href="project.externalLink" target="_blank"
                                    small>
                                        <v-icon color="accent">open_in_new</v-icon>
                                    </v-btn>
                                </div>

                           </v-parallax>

                           <v-layout v-else align-center style="margin-bottom: 124px; padding:20px">    

                                <v-flex style="width:60%;" :class="{'order-sm2' : idx%2===1}">
                                    <v-card flat>
                                        <v-img v-bind:src="require('@/assets/demoSC.png')" ></v-img>
                                    </v-card>
                                </v-flex>                                   

                                <v-flex :style="styleObject(idx)" >

                                    <span class="accent--text text-uppercase caption font-weight-bold" 
                                        style="font-family: 'Monda', sans-serif;">Featured Project</span>
                                    <br/>

                                    <span class="display-1 font-weight-bold white--text" style="opacity:0.9;">{{project.name}}</span>
                                    <br/><br/>
                                    
                                    <v-card color="secondary" tile dark hover style="cursor:default;">
                                        <v-card-text>
                                            <span style="line-height:24px;">{{project.description}}</span>
                                        </v-card-text>
                                    </v-card>

                                    <br/>
                                    
                                    <ul>
                                        <li v-for="tech in project.technologies" :key="tech"
                                            :style="listStyleObj(idx)">
                                            {{tech}}
                                        </li>
                                    </ul>
                                    <br/>

                                    <v-btn v-if="project.githubLink!==null" icon :href="project.githubLink" target="_blank">
                                        <v-icon color="accent">fab fa-github</v-icon>
                                    </v-btn>

                                    <v-btn v-if="project.externalLink!==null" icon :href="project.externalLink" target="_blank">
                                        <v-icon color="accent">open_in_new</v-icon>
                                    </v-btn>
                                    
                                </v-flex>                                    

                            </v-layout>
                           
                       </v-card>

                   </v-flex>

                </v-layout>

            </v-container>
        </v-content>
    </v-app>

</template>

<style scoped>
    ul {
        list-style-type: none;
        margin:0;
        padding: 0;
        overflow: hidden;
    }

    ul li::before {
        content: none;  /* Add content: \2022 is the CSS Code/unicode for a bullet */
    }
</style>
