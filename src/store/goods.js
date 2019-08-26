import goods from '../service/goods'

export default {
    state: {
        slider: [],
        keys: [],
        goodsInfo: {}
    },
    mutations: {
        setGoodsInfo(state, { slider, keys, goodsInfo }) {
            state.slider = slider;
            state.keys = keys;
            state.goodsInfo = goodsInfo;
        }
    },
    getters: { //添加一个goods属性，转换对象形式为数组形式便于循环渲染
        goods: state => {
            return state.keys.map(key => state.goodsInfo[key])
                .reduce((prev, next) => prev.concat(next), [])
        }
    },
    actions: {
        getGoods({ state, commit }, goods) {
            if (!state.goodsInfo) {
                // 没有数据爱去获取
                goods.getGoodsInfo().then(goodsInfo => {
                    commit('setGoodsInfo', goodsInfo);
                })
            }
        }
    }
}