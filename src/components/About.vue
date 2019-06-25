<script>
export default {
    props:{
        aboutData:Object
    },
    methods:{
        range (start, end, length = end - start) {
            return Array.from({ length }, (_, i) => start + i)
        }
    },
    computed:{
        length(){
            return this.aboutData.techStack.length;
        },
        currentJobHtml(){
            return '<span style="color:var(--v-accent-base)">Oyo Hotels and Home</span>'
        },
        college(){
            return '<span style="color:var(--v-accent-base)">National Institute of Technology, Delhi (NIT Delhi)</span>'
        }
    }
}
</script>


<template>
    <v-app>
        <v-content class="pa-0">
            <v-container class="main_ " fluid fill-height>
                <v-layout align-center justify-center row wrap>

                    <v-flex xl6 lg6 md6 sm8 xs12 style="padding-right:10%; margin-bottom:64px;" > 

                        <span class="font-weight-bold white--text" :class="{
                            'display-1': $vuetify.breakpoint.smAndDown,
                            'display-2': $vuetify.breakpoint.mdAndUp,
                        }" style="opacity:0.9">
                            About Me
                        </span>
                        <v-divider style="background:var(--v-accent-base)"/>
                        <br/><br/>

                        <div class="subheading" style="text-align:justify; line-height:26px;">

                            <span>
                                    Hello there! I'm Ninad Mohite, a software developer who loves creating consumer 
                                    facing applications.  I have done my Bachelors from <span v-html="college"></span> in Computer Science and
                                    Engineering. During my time there, I have learnt and developed many projects encompassing various technologies.
                            </span><br/><br/>

                            <span>
                                    Shortly after graduating, I started working as a Software Developer in <span v-html="currentJobHtml"></span>, 
                                    where I am currently working.
                                    In my free time, you can find me developing Android apps or playing Basketball.
                               
                            </span><br/><br/>

                            <span>Here are a few technologies I have worked with: </span><br/><br/>                     

                            <div style="float: left; width: 50%;text-align:left;line-height:30px;" >
                                <ul>
                                    <li v-for="i in length/2" v-bind:key="i">{{aboutData.techStack[i-1]}}</li>
                                </ul>
                            </div>
                            <div style="float: right; width: 50%; text-align:left;line-height:30px;" >
                                <ul>
                                    <li v-for="i in range(length/2, length)" v-bind:key="i">{{aboutData.techStack[i]}}</li>
                                </ul>
                            </div>
                        </div>

                    </v-flex>

                    <v-flex xl2 lg2 md2 sm4 xs6 >
                        <v-card hover flat tile style="cursor:default;">
                            <v-img v-bind:src="require('@/assets/dp.jpg')" class="image_style" min-height="312px" min-width="212px" ></v-img>
                        </v-card>
                    </v-flex>

                </v-layout>                
            </v-container>
        </v-content>
    </v-app>
</template>

<style scoped>

.image_style{
    border-style: solid;
    border-width: 1px;
    border-color:var(--v-secondary-base);
}
</style>

