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

                        <span class="font-weight-bold white--text" :class="{
                                'display-1': $vuetify.breakpoint.smAndDown,
                                'display-2': $vuetify.breakpoint.mdAndUp,
                            }" style="opacity:0.9" >
                                Where I've worked
                        </span>
                         <v-divider style="background:var(--v-accent-base)"/>
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
                                            <span class="headline">{{workItem.role}}</span>
                                            <span class="headline " style="color:var(--v-secondary-base);">
                                                @{{workItem.companyName}}
                                            </span><br/>
                                            <span class="sub-heading font-weight-light">{{workItem.duration}}</span>
                                        </div>                                      
                                    </v-card-title>

                                    <v-card-text>
                                        <ul style="line-height:32px;" class="subheading font-weight-light">
                                            <li v-for=" highlight in workItem.highlights" v-bind:key="highlight" class="main_">{{highlight}}</li>
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

