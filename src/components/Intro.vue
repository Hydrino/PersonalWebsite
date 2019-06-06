<template>
    <v-app>
        <v-content  class="main_">
            <v-container>
                <span class="small_text_1">Hey there,</span><br>
                <span class="big_text">Ninad Mohite</span><br>
                <span class="small_text_2">One cool thing at a time.</span><br>
            </v-container>

        </v-content>
    </v-app>
</template>

<script>
export default {

}
</script>

<style scoped>
.main_{
    background: var(--v-primary-base);
    color: var(--v-secondary-base);
}
.small_text_1 {
    font-size: 1.5em;   
}

.big_text {
    font-size: 4em;
    
}

.small_text_2 {
    font-size: 2em;
}
</style>




