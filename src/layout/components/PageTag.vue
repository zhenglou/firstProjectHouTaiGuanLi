<template>
  <div>
    <router-link 
      v-for="(item, index) in tagRoutes"
      :key="item.path"
      :to="item.path"
      :class="['tags-item', $route.path === item.path ? 'isActive':'']"
    >
      {{item.meta.title}}
      <i 
        v-if="item.path !== '/index'"
        class="el-icon-close"
        @click.prevent="handleRoutes(index, item.path)"
      >
      </i>
    </router-link>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
// import router from "@/router";
export default {
  name: "PageTag",
  data() {
    return {
   
    };
  },
  computed: {
    ...mapState("app", ["tagRoutes"])
  },
  methods: {
    ...mapMutations("app", ["addTagRoutes", "removeTagRoutes"]),
    handleRoutes(index, path){
      // let isRoute = path === this.route.path;
      this.removeTagRoutes({index, isRoute: this.$route.path === path});
    }
  }
};
</script>
<style lang="less" scoped>
</style>

