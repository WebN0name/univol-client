

<template>

  <div id="app">
    <main>
      <app-head v-if="state != 'header'"></app-head>
      <app-header v-if="state == 'header'" @OnVolonter="OnVolonter" @OnOrg="OnOrg" @OnHeader="OnHeader" @OnJobs="OnJobs"></app-header>
      <app-volonter v-else-if="state == 'volonter'"></app-volonter>
      <app-vacancy v-else-if="state == 'jobs'"></app-vacancy>
      <app-prof v-else-if="state == 'prof'"></app-prof>
      <app-org v-if="state == 'org'" ></app-org>
      <app-footer v-if ="state != 'header'"></app-footer>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      state: 'header',
    }
  },
  methods: {
    OnVolonter(){
      this.state = 'volonter';
    },
    OnOrg(){
      this.state = 'org';
    },
    OnHeader(){
      this.state = 'header';
    },
    OnJobs(){
      this.state = 'jobs';
    },
    OnProfOrg(){
      this.state = 'prof';
    }
  },
}
</script>

<style>
#app{
  display: flex;
  justify-content: center;
  background-color: #F9F9F9;
}
</style>
