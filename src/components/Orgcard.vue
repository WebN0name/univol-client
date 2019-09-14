<template>
    <div>
        <div class="organization" v-for="org in organizations">
            <img class='avatar' v-bind:src="org.photo_200" v-bind:alt="org.name + '\'s photo'">
            <div class='info'>
                <a href="#" @click="$emit('OnProfOrg')">{{org.name}}</a>
                <p>Мы в vk : <a v-bind:href="'http://vk.com/' + org.screen_name">{{org.screen_name}}</a>  </p>
                <p>О нас: {{org.about}} </p>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'

    Vue.use(VueAxios, axios)
    export default {
        data(){
            return{
               organizations : null 
            }
        },
        mounted(){
                        axios
            .get('http://192.168.1.197:3000/nko')
            .then(response => (this.organizations = response.data));
        }
    }
</script>
    
<style  scoped>
    .organization{
        width: 50vw;
        margin-top: 15px;
        margin-bottom: 15px;
        border-top : 2px solid #808080;
        padding : 1rem;
    }
    .avatar{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        float: left;
    }

    .info{
        display: flex;
        flex-direction: column;
        padding-left: 30px;        
    }
</style>