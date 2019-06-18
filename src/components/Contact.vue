<script>
export default {
    
}
</script>

<template>
    <v-app>
        <v-content class="pa-0" >
            <v-container class="main_ " fluid fill-height >
                <v-layout row wrap justify-center align-content-center>

                    <v-flex offset-md2 xs12 >
                        <span class="section_style display-2 font-weight-bold">Reach out!</span>
                        <v-divider color="accent"/><br/><br/>
                    </v-flex>

                    <v-flex xs10 sm8 md6 lg6 xl4 class="text-xs-center">
                        <span class="subheading font-weight-light" style="line-height:28px;" >
                            Although I'm not currently looking for freelance opportunities, 
                            my inbox is always open. Whether for a potential project or just to say hi, I'll try my best to answer your email!
                        </span>
                    </v-flex>

                    <v-flex xs12 class="text-xs-center" >
                        <br/><br/>
                        <span :class="{'title': $vuetify.breakpoint.xs,'display-1': $vuetify.breakpoint.sm,
                         'display-2': $vuetify.breakpoint.md, 'display-3': $vuetify.breakpoint.lg, 
                         'display-4': $vuetify.breakpoint.xl}"  >
                            mohiteninad15@gmail.com
                        </span>
                    </v-flex>

                </v-layout>
            </v-container>      
        </v-content>
    </v-app>
</template>

<style scoped>

</style>


