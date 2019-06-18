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
                        <span class="section_style display-2 font-weight-bold" >About Me</span>
                        <v-divider color="accent"/>
                        <br/><br/>
                        <div class="main_text subheading " style="text-align:justify;">
                            <span>{{aboutData.para1}}</span><br/><br/>
                            <span>{{aboutData.para2}}</span><br/><br/>
                            <span>Here are a few technologies I have worked with: </span><br/><br/>                     

                            <div style="float: left; width: 50%;text-align:left;line-height:28px;" >
                                <ul>
                                    <li v-for="i in length/2" v-bind:key="i">{{aboutData.techStack[i-1]}}</li>
                                </ul>
                            </div>
                            <div style="float: right; width: 50%; text-align:left;line-height:28px;" >
                                <ul>
                                    <li v-for="i in range(length/2, length)" v-bind:key="i">{{aboutData.techStack[i]}}</li>
                                </ul>
                            </div>
                        </div>
                    </v-flex>

                    <v-flex xl2 lg2 md2 sm4 xs6>
                        <v-card flat color="primary">
                            <v-img v-bind:src="require('@/assets/dp.jpg')" min-height="312px" min-width="212px" ></v-img>
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

