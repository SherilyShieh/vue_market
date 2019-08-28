<template>
    <div class="ball-wrap">
        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @afterEnter="afterEnter">
            <div class="ball" v-show="show">
                <div class="inner">
                    <div class="cubeic-add"></div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "cartAnim",
        data() {
            return { show: false }
        },
        methods: {
            start(el) { //启动动画接口，传递点击按钮元素
                this.el = el;

                //使.ball显示，激活动画钩子
                this.show = true;
            },
            beforeEnter(el){
                // 把小球移动到点击的dom园所所在的位置
                const rect = this.el.getBoundingClientRect();
                // 转换为用于绝对定位的坐标
                const x = rect.left - window.innnerWidth / 2;
                const y = -(window.innerHeight - rect.top - 10 - 20);

            }
        },
    }
</script>

<style lang="scss" scoped>

</style>