<template>
    <v-app>
        <v-content class="pa-0">
            <v-container class="main_ " fluid fill-height>
                <v-layout align-center justify-center row wrap>
                    <v-flex lg6 md6 sm12 xs12 > 
                        <span class="subheading  font-weight-light" >{{aboutData.aboveNameText}}</span><br/>   
                        <span class="display-4 font-weight-medium">{{aboutData.nameText}}</span><br/>   
                        <span class="font-weight-light headline ">{{aboutData.belowNameText}}</span><br/>   
                    </v-flex>
                </v-layout>
            </v-container>

        </v-content>
    </v-app>
</template>

<script>
export default {
    computed:{
        aboutData(){
            return this.$store.getters.getAboutData
        }
    }
}
</script>

<style scoped>
.main_{
    background: var(--v-primary-base);
    color: var(--v-secondary-base);
    padding: 0pt;
}
/* .test{
    background: blue
} */
</style>




