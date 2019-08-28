<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- 轮播图 -->
    <cube-slide
      :data="slider" :interval="5000">
      <cube-slide-item v-for="(item, index) in slider" :key="index">
        <router-link
          :to="`/detail/${item.id}`">
          <img class="slider" :src="item.img"/>
        </router-link>
      </cube-slide-item>
    </cube-slide>

    <!-- 商品列表 -->
    <good-list :data="goods"></good-list>
  </div>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import GoodList from '@/components/GoodList.vue'
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'home',
  components: {
    // HelloWorld
    GoodList
  },
  created() {
    this.getGoods()
  },
  computed: {
    ...mapState({
      slider: state => state.goods.slider
    }),
    ...mapGetters(['goods'])
  },
  methods: {
    ...mapActions(['getGoods'])
  }
}
</script>
<style scoped>
.cube-slide {
  height: auto;
}
</style>
