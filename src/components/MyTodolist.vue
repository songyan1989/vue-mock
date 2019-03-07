<template>
    <section>
        <div>{{newsData.Name}}</div>
    </section>
</template>
<script>
export default {
  name: 'MyTodolist',
  props: {
    newsData: Object
  },
  data () {
    return {

    }
  },
  created () {
    this.Test()
  },
  methods: {
    Test () {
      console.log(this.newsData)
    }
  }
}
</script>
<style scoped>
</style>
