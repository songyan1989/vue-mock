
<template>
  <div>
    <router-link to="/mock">123</router-link>
    <router-link to="/hello">456</router-link>
    <router-view>
    </router-view>
  </div>

</template>
<script>
import Admin from './components/Admin.vue';
import Mock from './components/Mock.vue';

export default {
  name: 'App',
  methods: {
  },
  components: {
    Admin,
    Mock
  },
};
</script>
<style>
html,body{
    height: 100%;
    overflow: hidden;
}

</style>
