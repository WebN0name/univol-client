<template>
    <div>
        <input v-model="search" type="text" />
        
            <div class="card" v-for="volunteer in volunteers">
                <a v-bind:href="'/volunteers?id=' + volunteer.id">
                <img class="avatar" v-bind:src="volunteer.avatar" v-bind:alt="volunteer.first_name + '\'s photo'">
                <div class="info">
                    <h1>{{volunteer.first_name }} {{volunteer.last_name }}</h1>
                    <p>Телефон: {{volunteer.phone }}</p>
                    <p>Дата рождения: {{volunteer.bdate }}</p>
                    <p>О себе: {{volunteer.about }}</p>
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
        volunteers: null,
        search: { firstname: [] },
        }
    },
    mounted(){
      axios
      .get('http://192.168.1.197:3000/volunteers')
      .then(response => (this.volunteers = response.data));
    },
    computed :{
        filteredItems(){
            return this.volunteers.filter(volunteer => {
                if(this.search.firstname.length > 0 && this.search.firstname.indexOf(volunteer.first_name) === -1){
                    return false;
                }
                return true;
            })
        }
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