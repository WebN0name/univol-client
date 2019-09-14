<template>
    <header class="main-head">
       <div class="header-wrap">
           <a href="#" class="btn-link" @click="$emit('OnVolonter')">Волонтеры</a>
           <h1 class="logo">UNIVOL</h1>
           <a href="#" class="btn-link" @click="$emit('OnOrg')">Организации</a>
           <a href="#" class="btn-link" @click="$emit('OnJobs')">Вакансии</a>
       </div>
    </header>
</template>


<script>
export default {
    
}
</script>


<style  scoped>

a{
    text-decoration: none;
    color: #fff;
}

.main-head{
    width: 100vw;
    height: 100vh;
    background-image: url(../assets/4QM6kY39b3k.jpg);
    background-size: cover;
}


.header-wrap{
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.6);
    display: flex;
    justify-content: center;
    flex-flow: column;
    align-items: center;
}

.btn-link{
    border: 3px solid #fff;
    font-size: 50px;
    padding: 15px;
    margin: 120px;
    min-width: 25vw;
    text-align: center;
    border-radius: 25px;
}

.btn-link:hover{
    color: #ec4451;
    border: 3px solid #ec4451;
}

.logo{
    text-transform: uppercase;
    color: #ec4451;
    font-size: 150px;
    letter-spacing: 90px;
}

</style>