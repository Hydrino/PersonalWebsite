<template>
<!-- Gotta wrap inside v-app in order for Vuetify to work! -->
    <v-app>
        <v-toolbar color="primary" dark flat app >
            <v-toolbar-title>Ninad Mohite</v-toolbar-title>
            <v-spacer></v-spacer>

            <v-toolbar-items>
                <v-btn flat>About</v-btn>
                <v-btn flat>Work</v-btn>
                <v-btn flat>Projects</v-btn>
                <v-btn flat>Contact</v-btn>
            </v-toolbar-items>
        </v-toolbar>

        <v-content class="main_theme">
            <v-container fluid>
                <intro/>
            </v-container>
        </v-content>
       
    </v-app>

</template>

<script>
import intro from "@/components/Intro.vue";
export default {
    components:{    
        intro
    }
}
</script>

<style scoped>
.main_theme{
    background: var(--v-primary-base)
}
</style>


