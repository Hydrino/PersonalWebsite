<script>
export default {
    props:{
        featuredProjects:Array
    }
}
</script>

<template>
    
    <v-app>
        <v-content class="pa-0">
            <v-container class="main_" fluid>

                <v-layout row wrap justify-center> 

                   <v-flex v-for="project in featuredProjects" 
                        v-bind:key="project.name" xs12 sm10 md8 lg8 xl6 align-content-center 
                        style="margin:16px;">
                       
                       <v-card color="transparent" flat >

                           <v-parallax v-if=$vuetify.breakpoint.xsOnly :src="require('@/assets/demoSC.png')">

                                <v-layout align-center justify-end > 
                                   <div style="text-align:end; background:transparent;" >

                                        <span class="accent--text">Featured Project</span><br/>

                                        <span class="headline font-weight-medium">{{project.name}}</span><br/><br/>

                                        <v-card color="secondary" tile dark>
                                            <v-card-text>
                                                <span>{{project.description}}</span>
                                            </v-card-text>
                                        </v-card>

                                        <br/>
                                        
                                        <ul>
                                            <li v-for="tech in project.technologies" :key="tech">{{tech}}</li>
                                        </ul>
                                    </div>                               
                                </v-layout>
                           </v-parallax>

                           <v-layout v-else align-center >

                                <div style="float:left; width:60%;" >
                                    <v-card flat>
                                        <v-img v-bind:src="require('@/assets/demoSC.png')" ></v-img>
                                    </v-card>
                                </div>       

                                <div style="float:right;
                                            text-align:end;
                                            width:40%;
                                            margin-left:-64px;
                                            z-index:1;
                                            background:transparent;" >

                                    <span class="accent--text ">Featured Project</span><br/>

                                    <span class="headline font-weight-medium">{{project.name}}</span><br/><br/>

                                    <v-card color="secondary" tile dark >
                                        <v-card-text>
                                            <span>{{project.description}}</span>
                                        </v-card-text>
                                    </v-card>

                                    <br/>
                                    
                                    <ul>
                                        <li v-for="tech in project.technologies" :key="tech">{{tech}}</li>
                                    </ul>
                                </div>      

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

    li {
        float: right;
        margin-left: 16px;
    }
</style>
