<template>
  <div id="app">
    <admin />
    <trace :information="trace"/>
  </div>
</template>

<script>
import Admin from './components/Admin'
// 这里是第二处
import Trace from './components/Trace'

export default {
  name: 'App',
  data () {
    return {
      trace: {
        rows: []
      }
    }
  },
  // 这里第3处
  created () {
    this.$addReceiver((data) => {
      console.log(data)
      if (data.trace) this.trace = data.trace
    })
    this.$httpGet('/index.json')
  },
  components: {
    Admin,
    Trace
  }
}
</script>

<style>
