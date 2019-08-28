<template>
  <div class="home">
    <!-- 轮播图 -->
    <cube-slide :data="slider" :interval="5000">
      <cube-slide-item v-for="(item, index) in slider" :key="index">
        <router-link :to="`/detail/${item.id}`">
          <img class="slide" :src="item.img"/>
        </router-link>
      </cube-slide-item>
    </cube-slide>
    <good-list :data="goods"></good-list>
  </div>
</template>

<script>
// @ is an alias to /src
import GoodList from '@/components/GoodList.vue';
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'home',
  components: {
    GoodList
  },
  created() {
    this.getGoods(); //数据初始化
  },
  computed: {
    ...mapState({
      slider: state=>state.goods.slider
    }),
    ...mapGetters(['goods'])
  },
  methods: {
    ...mapActions(['getGoods'])
  }
}
</script>
<style lang="scss" scoped>

</style>
