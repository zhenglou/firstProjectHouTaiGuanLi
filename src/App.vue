<template>
  <div id="app" :class="$store.state.theme.themeColor">
    <router-view/>
  </div>
</template>

<style lang="less">
@import '~@/style/common.less';
@import "~@/style/element.less";
</style>
