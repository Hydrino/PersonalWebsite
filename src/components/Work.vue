<script>
export default {
    props:{
        workData:Array
    }
}
</script>


<template>
    <v-app>
        <v-content class="pa-0">
            <v-container fluid fill-height class="main_">
                
                <v-layout justify-center align-center >

                    <v-flex xl6 lg8 md8 sm12 xs12 > 

                        <v-layout row align-center>

                            <div style="display:inline-block;">
                                <span class="font-weight-bold white--text text-capitalize" :class="{
                                        'display-1': $vuetify.breakpoint.smAndDown,
                                        'display-2': $vuetify.breakpoint.mdAndUp,
                                    }" style="opacity:0.9" >
                                        Where I've worked
                                </span>
                            </div>

                            <v-flex>
                                <v-divider style="background:var(--v-accent-base); margin-left:16px;"/>
                            </v-flex>   
                        </v-layout>
                        

                        
                        <br/><br/>

                        <v-tabs color="primary" dark slider-color="secondary">

                            <v-tab v-for="workItem in workData" v-bind:key="workItem.companyName" ripple>
                                {{workItem.companyName}}    
                            </v-tab>
                            
                            <v-tab-item v-for="workItem in workData" v-bind:key="workItem.companyName" >

                                <v-card dark flat color="primary" min-height="464px" >
                                    
                                    <v-card-title>
                                        <div>
                                            <br/>
                                            <span :class="[$vuetify.breakpoint.lgAndUp? 'display-1' : 'headline', 'font-weight-light']">
                                                {{workItem.role}}
                                            </span>
                                            <span class="headline font-weight-bold" 
                                                style="color:var(--v-secondary-base);">
                                                @{{workItem.companyName}}
                                            </span><br/>

                                            <span style=" opacity:0.7">
                                                {{workItem.duration}}
                                            </span>
                                        </div>                                      
                                    </v-card-title>

                                    <v-card-text>
                                        <ul style="line-height:32px;" class="subheading">
                                            <li v-for=" highlight in workItem.highlights" v-bind:key="highlight" 
                                                class="main_ " >
                                                {{highlight}}
                                            </li>
                                        </ul>                           
                                    </v-card-text>

                                </v-card>

                            </v-tab-item>

                        </v-tabs>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<style>

</style>

