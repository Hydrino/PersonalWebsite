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
                        <span class="section_style display-1 font-weight-bold" >Where I've worked</span><br/><br/>
                        <v-tabs color="primary" dark slider-color="secondary">
                            <v-tab v-for="workItem in workData" v-bind:key="workItem.companyName" ripple>
                                {{workItem.companyName}}
                            </v-tab>

                            <v-tab-item v-for="workItem in workData" v-bind:key="workItem.companyName">

                                <v-card flat tile color="primary" dark>
                                    <v-card-title>{{workItem.companyName}} </v-card-title>
                                    <v-card-text>
                                        <span>{{workItem.role}}</span><br/>
                                        <span>{{workItem.duration}}</span>     
                                        <ul>
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

