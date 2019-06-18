<template>
    <v-app>
        <v-content class="pa-0">
            <v-container class="main_ " fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex lg6 md6 sm12 xs12 > 
                        <span class="subheading font-weight-light" >{{introData.aboveNameText}}</span><br/>   
                        <span class="display-3 font-weight-medium">{{introData.nameText}}</span><br/>   
                        <span class="font-weight-light headline ">{{introData.belowNameText}}</span><br/>   
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
    }
}
</script>





