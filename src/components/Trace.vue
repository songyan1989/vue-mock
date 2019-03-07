<template>
<div class="trace">
  <el-badge :value="information.rows.length" class="trace-icon" v-show="!open">
    <el-button size="small" @click="onOpen">调试</el-button>
  </el-badge>
  <el-card class="trace-card" v-show="open">
    <div slot="header" class="clearfix">
      <span>调试信息</span>
      <el-button class="trace-close-btn" type="text" @click="open = false">关闭</el-button>
    </div>
    <div v-for="(o, i) in information.rows" :key="i" class="text item">
      {{o}}
    </div>
  </el-card>
</div>
</template>

<script>
export default {
  props: [
    'information',
  ],
  data() {
    const value = this.information.rows.length;
    return {
      open: false,
      value,
    };
  },
  methods: {
    onOpen() {
      this.open = true;
      this.value = 0;
    },
  },
};
</script>
<style scoped>
.trace {
  position: fixed;
  bottom: 30px;
  right: 30px;
}
.trace-close-btn {
  float: right; padding: 3px 0
}

</style>