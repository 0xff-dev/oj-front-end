import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tabIndex: 0,
        panelStatus: 0, // 0不显示，1显示login，2显示register
        token: localStorage.getItem("user_token") || '',
        userinfo: {}
    },
    mutations: {
        // 对于head的跳转
        setTabIndex(state, index) {
            state.tabIndex = index
        },
        // 登录，注册面板
        setPanelStatus(state, status) {
            state.panelStatus = status
        },
        setUserToken(state, val) {
            state.token = val
        },
        setUserInfo(state, val) {
            state.userinfo = val
        } 
    }
});
