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
    <!-- <good-list :data="goods" @cartanim="$refs.ca.start($event)"></good-list> -->
    <good-list :data="goods" @cartanim="startAnim" ></good-list>


    <!-- <cart-anim ref="ca"></cart-anim> -->
  </div>

</template>

<script>
// @ is an alias to /src
import GoodList from '@/components/GoodList.vue'
import CartAnim from '@/components/CartAnim.vue';
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'home',
  components: {
    GoodList,
    CartAnim
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
    ...mapActions(['getGoods']),
    startAnim(el) {
      // 创建小球动画实例，开始动画
      // const anim = this.$createCartAnim({
      //   onTransitionend() {
      //     anim.remove();
      //   }
      // });
      // anim.start(el);

      // 方式2
      const anim = this.$create(CartAnim, {pos: {left: '30%', bottom: '16px'}})
      anim.start(el);
      anim.$on('transitionend', anim.remove)

    }
  }
}
</script>
<style scoped>
.cube-slide {
  height: auto;
}
</style>
