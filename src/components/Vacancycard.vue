<template>
    <div>
        <div class="card" v-for="job in jobs">
            <a href="">
                <div class="info">
                    <h1>{{job.job_name}}</h1>
                    <p>id НКО  : {{job.id}}</p>
                    <p>{{job.job_description}}</p>  
                </div>
            </a>
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
        jobs: null,
        }
    },
    mounted(){
      axios
      .get('http://192.168.1.197:3000/jobs')
      .then(response => (this.volunteers = response.data));
    }
}
</script>

<style  scoped>
.card{
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