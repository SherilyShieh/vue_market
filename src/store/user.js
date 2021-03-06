import us from '../service/user'

export default {
    state: {
        isLogin: localStorage.getItem('token') ? true : false
    },
    mutations: {
        setLoginStatus(state, status) {
            state.isLogin = status
        }
    },
    actions: {
        login({ commit }, user) {
            return us.login(user).then(res => {
                const { code, token } = res.data;
                if (code) {
                    commit('setLoginStatus', true);
                    localStorage.setItem("token", token);
                }
                return code;
            })
        },
        logout({ commit }) {
            // 清缓存
            localStorage.removeItem("token");
            // 重置状态
            commit('setLoginStatus', false);
        }
    }
};