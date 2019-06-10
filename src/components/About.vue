<script>
export default {
    computed:{
        name(){
           return this.$store.getters.getName
        }
    }
}
</script>


<template>
    <v-app>
        <v-content class="pa-0">
            <v-container class="main_" fluid fill-height>
                <v-layout align-center justify-center row wrap>
                    <v-flex lg4.5 md6 sm8 xs12 > 
                        <span class="section_style display-1 font-weight-bold" >About Me</span><br/><br/>
                        <div class="main_text subheading " >
                            <span>Well hello there! I'm {{name}}, a software engineer based in Mumbai, India who loves creating consumer facing applications. I am currently working as a Software Developer in Oyo-Hotels and Home, in Bengaluru. In my free time, I like to develop mobile apps and play basketball!</span><br/><br/>
                            <span>I have done my graduation from National Institute of Technology, Delhi (NIT Delhi) in Computer Science and Engineering. During my time there, I have learnt and developed many projects encompassing various technologies.</span><br/><br/>
                            <span>Here are a few technologies I have worked with: </span><br/><br/>                     

                            <div style="float: left; width: 50%;" >
                                <ul>
                                    <li>Android App Development</li>
                                    <li>Mobile App Design</li>
                                    <li>Machine Learning</li>   
                                </ul>
                            </div>
                            <div style="float: right; width: 50%;" >
                                <ul>    
                                    <li>Blockchain</li>
                                    <li>FireBase</li>
                                    <li>Vue</li>
                                </ul>
                            </div>
                        </div>
                    </v-flex>
                    <v-flex lg1.5 md2 sm4 xs12>
                        <v-card hover ripple >
                            <v-img v-bind:src="require('@/assets/dp.jpg')" ></v-img>
                        </v-card>
                    </v-flex>
                </v-layout>                
            </v-container>
        </v-content>
    </v-app>
</template>

<style>

.section_style{
    color: var(--v-accent-base);
}

.main_text{
    opacity: 0.75;
    font-family: 'Monda', sans-serif;
}

</style>

