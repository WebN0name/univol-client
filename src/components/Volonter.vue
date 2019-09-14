<template>
<div class="main-wrap">
    <section class="volonter">
        <div class="wrap">
            <app-card ></app-card>
        </div>
    </section>
    <aside class="values">
        <input v-model="first_name" type="text" />
    </aside>
</div>
</template>

<script>
export default {
 
}
</script>

<style  scoped>
.main-wrap{
    width: 80vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
.volonter{
    width: 60vw;
    display: flex;
    padding-left: 40px;
    padding-top: 50px;
    padding-bottom: 50px;
}
.values{
    display: flex;
    width: 20vw;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 40px;
}

.values input{
    height: 0px;
}
</style>