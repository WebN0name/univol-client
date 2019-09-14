<template>
    <header class="header">
       <div class="wrap">
           <a href=""><img src="../assets/fad4acaa89c034cfabeaa31bd163bc17_jpg_kopia.png" alt="logo" class="logo" @click="$emit('OnHeader')"></a> 
        <div class="auth">
            <a href="" class="">Вход</a>
            <span>/</span>
            <a href="" class="">Регистрация</a>
        </div>
       </div>
    </header>
</template>

<script>
export default {
    
}
</script>

<style  scoped>

.header{
    width: 100vw;
    display: flex;
    justify-content: center;
}

.wrap{
    width: 80%;
    padding-top: 15px;
    padding-bottom: 15px;
}

.logo{
    width: 100px;
    height: 100px;
    float: left;
}

.auth{
    display: flex;
    align-items: center;
    float: right;
    height: 100px;
}

</style>