<template>
    <v-app>
        <v-content class="pa-0">
            <v-container class="main_ " fluid fill-height>
                <v-layout row wrap align-content-center> 
                    <v-flex xl6 lg6 md6 sm12 xs12 offset-md3> 
                        <!-- when using breakpoint like this in the form of a json class,
                        notice that the keys must be unique -->
                        <span :class="{
                            'body-1': $vuetify.breakpoint.smAndDown,
                            'title': $vuetify.breakpoint.mdAndUp
                        }" class="font-weight-light accent--text">
                        {{introData.aboveNameText}}</span><br/>   


                        <span :class="{
                                'display-2': $vuetify.breakpoint.xsOnly, 
                                'display-3': $vuetify.breakpoint.smOnly,
                                'display-4': $vuetify.breakpoint.mdAndUp
                            }" class="font-weight-medium white--text" style="opacity:0.9;">

                            {{introData.nameText}}
                        </span><br/>   

                        <span :class="{
                                'display-2': $vuetify.breakpoint.xsOnly, 
                                'display-3': $vuetify.breakpoint.smOnly,
                                'display-4': $vuetify.breakpoint.mdAndUp
                            }" class="font-weight-medium white--text" style="opacity:0.5;">
                            {{introData.tagLine}}
                        </span><br/><br/><br/>          
                           
                    
                    </v-flex>

                    <v-flex xs10 sm10 md4 lg4 xl4 offset-md3>
                       <span class="subheading" style="line-height:26px;">{{introData.belowNameText}}</span>
                    </v-flex>

                    <v-flex xs12 offset-md3 style="padding-top:32px;">
                        <v-btn outline color="accent" style="height:100%;margin:14px" class="text-capitalize font-weight-light"
                        @click="$vuetify.goTo('#Contact')">Get in touch</v-btn>
                    </v-flex>
                </v-layout>
            </v-container>

        </v-content>
    </v-app>
</template>

<script>
export default {
    props:{
        introData:Object
    },

}
</script>

<style scoped>

</style>