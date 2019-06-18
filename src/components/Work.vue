<script>
export default {
    computed:{
        workData(){
            return this.$store.getters.getWorkData
        }
    }
}
</script>


<template>
    <v-app>
        <v-content class="pa-0">
            <v-container fluid fill-height class="main_">
                <v-layout align-center >
                    <v-flex lg6 md6 sm12 xs12 offset-md2> 
                        <span class="section_style display-2 font-weight-bold" >Where I've worked</span>
                         <v-divider color="accent"/>
                         <br/><br/>
                        <v-tabs color="primary" dark slider-color="accent">
                            <v-tab v-for="workItem in workData" v-bind:key="workItem.companyName" ripple>
                                {{workItem.companyName}}
                            </v-tab>

                            <v-tab-item v-for="workItem in workData" v-bind:key="workItem.companyName">

                                <v-card dark flat color="primary" min-height="312px" >
                                    
                                    <v-card-title>
                                        <div>
                                            <span class="headline">{{workItem.role}}</span>
                                            <span class="headline font-weight-light" style="color:var(--v-secondary-base);">
                                                @{{workItem.companyName}}
                                            </span><br/>
                                            <span class="sub-heading font-weight-light">{{workItem.duration}}</span>
                                        </div>                                      
                                    </v-card-title>
                                    <v-card-text>
                                        <ul style="line-height:32px;" class="subheading font-weight-light">
                                            <li v-for=" highlight in workItem.highlights" v-bind:key="highlight"> {{highlight}}</li>
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

