
<template>
  <el-container id="admin">
  <el-header height="80px">Header</el-header>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-main>
        33333333333333
      </el-main>
      <el-footer height="80px">Footer</el-footer>
    </el-container>
  </el-container>
</el-container>
</template>
<style scoped>
html,body{
    height: 100%;
    overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}
.el-main {
  overflow: auto;
}
.el-container {
  overflow: auto;
}
</style>
