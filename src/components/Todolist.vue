<template>
    <section>
        <div>{{newsData.Paragraph}}</div>
        <!-- <div>todo-list</div> -->
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
    // this.Test()
  },
  methods: {
    Test () {
      // Console.log(newsData)
    }
  }
}
</script>
<style scoped>
</style>
