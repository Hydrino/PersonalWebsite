<script>
export default {
    data(){
        return{
            snackbar:false
        }
    },
    props:{
        footerData:Array,
        contactData: Object
    }
}
</script>

<template>
    <v-app>
        <v-content class="pa-0">
            <v-container class="main_ " fluid fill-height >
                <v-layout row wrap justify-center align-content-center>

                    <v-flex offset-md2 xs12 >

                        <v-layout row align-center>
                            <div style="display:inline-block;">
                                <span class="font-weight-bold white--text text-capitalize" :class="{
                                    'display-1': $vuetify.breakpoint.smAndDown,
                                    'display-2': $vuetify.breakpoint.mdAndUp,
                                    }" style="opacity:0.9">
                                    {{contactData.title}}
                                </span>
                            </div> 

                            <v-flex md8>
                                <v-divider style="background:var(--v-accent-base); margin-left:16px;"/>                            
                            </v-flex>

                        </v-layout>                       

                        <br/><br/><br/>

                    </v-flex>
                   
                    <v-flex xs10 sm8 md6 lg6 xl4 class="text-xs-center">
                        <span class="subheading" style="line-height:28px;" >
                            {{contactData.message}} <br/> ^_^
                        </span>
                    </v-flex>

                    <v-flex xs12 class="text-xs-center" >
                        <br/><br/>

                        <v-tooltip bottom dark color="secondary" >
                            <template v-slot:activator="{ on }">
                                <span v-on="on" :class="{'title': $vuetify.breakpoint.xs,'display-1': $vuetify.breakpoint.sm,
                                                            'display-2': $vuetify.breakpoint.md, 'display-3': $vuetify.breakpoint.lg, 
                                                            'display-4': $vuetify.breakpoint.xl}" 
                                        v-clipboard="'mohiteninad15@gmail.com'" v-on:click="snackbar=true">
                                    <b>mohiteninad15@gmail.com</b>
                                </span>
                            </template>
                            <span>Click to copy</span>
                        </v-tooltip>

                        <v-snackbar v-model="snackbar" left timeout="1000" color="secondary">
                            Copied to clipboard.
                        </v-snackbar>
                        
                    </v-flex>

                </v-layout>
            </v-container>      
        </v-content>

        <v-footer dark height="auto" >

            <v-card flat tile width="100%">

                <v-card-text class="text-xs-center">

                    <v-btn v-for="data in footerData" :key="data.link" class="white--text" 
                        :class="$vuetify.breakpoint.xsOnly? 'mx-2' : 'mx-3'"
                        icon v-bind:href="data.link" target="_blank" >             
                        <v-hover>               
                            <v-icon medium slot-scope="{hover}" v-bind:color="`${hover? 'secondary' : 'white'}`" >
                                {{ data.icon }}
                            </v-icon>
                        </v-hover>
                        
                    </v-btn>                   
                    
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text class="text-xs-center">
                    <span>Designed and Built by Ninad Mohite.</span><br/>

                    <v-btn flat icon href="https://github.com/Hydrino/PersonalWebsite" target="_blank">
                        <v-icon color="accent">fa fa-code-branch</v-icon>
                    </v-btn>

                </v-card-text>

            </v-card>
        </v-footer> 
    </v-app>
</template>

<style scoped>

</style>


