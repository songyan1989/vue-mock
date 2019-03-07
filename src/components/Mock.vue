<template>
  <div>
     <div v-for="item in dataShow" >
      <MyTodolist
      :newsData="item"
      ></MyTodolist>
    </div>
  </div>
</template>
<script>
import api from './../axios/api.js'
import MyTodolist from './MyTodolist.vue'
export default {
  name: 'Mock',
  data () {
    return {
      dataShow: []
    }
  },
  components: {MyTodolist},
  methods: {
    getdata: function () {
      api.mockdata('/data/index')
        .then(res => {
          // console.log(res)
          this.dataShow = res
          // console.log(this.dataShow)
        })
    }

  },
  created () {
    this.getdata()
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
