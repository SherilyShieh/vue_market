<template>
  <div id="app">
    <transition name="route-move">
      <router-view class="child-view"/>
    </transition>
    <cube-tab-bar
      v-model="selectLabel"
      :data="tabs"
      @change="changeHandler">
      <cube-tab v-for="(item, index) in tabs"
        :icon="item.icon" :label="item.value" :key="index">
        <div> {{item.label}} </div>
        <span class="badge" v-if="item.label == 'Cart'"> {{cartTotal}} </span>
      </cube-tab>
    </cube-tab-bar>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return{
      selectLabel: '/',
      tabs: [
        {
          label: "Home",
          value: "/",
          icon: "cubeic-home"
        },
        {
          label: "Cart",
          value: "/cart",
          icon: "cubeic-mall"
        },
        {
          label: "Me",
          value: "/about",
          icon: "cubeic-person"
        },
      ]
    }
  },
  computed: {
    ...mapGetters(['cartTotal'])
  },
  created( ){
    //初始化页签设置，避免页面刷新
    this.selectLabel = this.$route.path;
  },
  watch: {
    $route(route) {
      // 监听路由变化并动态设置页签的选中状态
      this.selectLabel = route.path;
    }
  },
  methods: {
    changeHandler(val) {
      this.$router.push(val);
    },
    logout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>
<style lang="stylus" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.cube-tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #edf0f4;
}
.cube-tabe-bar-slider {
  top: 0;
}
// 动画
.route-move-enter { // 入场状态
  transform: translate3d(-100%, 0, 0);
}
.route-move-leave-to {// 离场状态
  transform: translate3d(100%, 0, 0);
}
.route-move-enter-active, .route-move-leave-active { // 激活状态
  transition: transform 0.3s;
}
.child-view { // 添加到每个页面上的样式，确保页面间补挤占位置
  position:absolute;
  left: 0;
  top: 0;
  width: 100%;
  padding-bottom: 40px;
}
.cube-tab {

}
</style>
