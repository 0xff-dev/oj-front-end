<template>
   <div class="header padding">
        <div class="nav-header">
            <p class="header-title">Online Judge</p>
            <button class="toggle" @click="show = !show">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        </div>
        <transition name="fade">
            <div class="ops-part" v-if="show">
                <ul class="items-part">
                  <li v-for="(item, index) in items" :key="index" :class="index==activeIndex?'active':''" @click="changeTab(index)">
                    <router-link :to="item.path" tag="span" class="router-link-span">
                        <img :src="item.src">
                        <span>{{item.name}}</span>
                    </router-link>
                  </li>
                </ul>
                <div class="buttons">
                    <button @click="login">Login</button>
                    <button @click="register">Register</button>
                </div>
                <!--测试用户登录后的显示结果, 名字很长的情况-->
                <!-- <div class="buttons">
                    <button class="user-login">stevenshuangcocordsdsdsdgggghghg</button>
                </div> -->
            </div>
        </transition>
    </div>
</template>

<script>

export default {
    data: function() {
        return {
            items: [{
                id: 1,
                name: 'Home',
                src:'',
                path: "/home"
            },{
                id: 2,
                name: 'Problems',
                src:'',
                path: "/problems"
            },{
                id: 3,
                name: 'Status',
                src:'',
                path: "/status"
            },{
                id: 4,
                name: 'Contests',
                src:'',
                path: "/contests"
            },{
                id: 5,
                name: 'Rank',
                src:'',
                path: "/rank"
            },{
                id: 6,
                name: 'About',
                src:'',
                path: "/about"
            }],
            show: document.body.clientWidth > 1060,
            //activeIndex: 0, // 应该需要vuex了，不能再等了
        }
    },
    created: function() {
        this.items.forEach( item => {
            item.src = require(`../assets/images/${item.name}.png`)
        });
        this.show = document.body.clientWidth >= 1060
    },
    mounted() {
        const that = this;
        window.onresize = () => {
            that.show = document.body.clientWidth >= 1060
        }
    },
    computed: {
        activeIndex() {
            return this.$store.state.tabIndex
        }
    },
    methods: {
        changeTab: function(index) {
            this.$store.commit('setTabIndex', index)
            if(document.body.clientWidth < 1060) {
                this.show = !this.show
            }
        },
        login: function() {
            this.$store.commit('setPanelStatus', 1)
            if(document.body.clientWidth < 1060) {
                this.show = !this.show
            }
        },
        register: function() {
            this.$store.commit('setPanelStatus', 2)
            if(document.body.clientWidth < 1060) {
                this.show = !this.show
            }
        }
    }
}
</script>

<style scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    vertical-align: middle;
    color: black;
    font-family: 'Operator Mono';
    background-color: #FDFDFD;
    box-shadow: 0px 3px 5px gray;
}

.router-link-span {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.padding {
     padding: 0 30px;
}
.header-title {
    font-size: 25px;
    width: 200px;
    float: left;
    text-align: start;
}

.nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
}

.toggle {
    float: right;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 20px;
    height: 20px;
    border: none;
    outline: none;
}
.toggle > .icon-bar {
    width: 20px;
    height: 4px;
    background-color: red;
}
.toggle .icon-bar + .icon-bar {
    margin-top: 4px;
}

.ops-part {
    width: 80%;
    height: inherit;
    display: flex;
    align-items: center;
}

.items-part {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 85%;
    list-style-type: none;
}
.items-part li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15%;
    text-align: center;
    height: 55px;
    cursor: pointer;
}
.items-part img {
    width: 15px;
    height: 15px;
    margin-right: 5px;
}

.buttons button {
    width: 80px;
    height: 30px;
    border-radius: 50px;
    outline: none;
}

.buttons  button + button {
    margin-left: 30px;
}

/* 菜单栏过度动画 */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.active {
    border-bottom: solid 1px rgb(73, 140, 233);
    border-bottom-width: 5px;
}

.user-login {
    width: auto !important;
}
/* 屏幕足够不需要进行适配 */
@media (min-width: 1060px) {
    .toggle {
        display: none;
    }
    .nav-header {
        float: left;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
    }
    .buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 15%;
        margin-left: 40px;
    }
}

@media (max-width: 1060px) {
    /* 当屏幕较小的时候直接下拉显示 */
    .padding {
        padding:  0;
    }
    .header-title {
        margin-left: 30px;
    }
    .toggle {
        margin-right: 30px;
    }

    .ops-part {
        background-color: white;
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        z-index: 100;
        overflow: scroll;
    }
    .items-part {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        list-style-type: none;
    }
    .items-part li {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 14px;
        text-align: start;
    }

    .nav-header {
        vertical-align: middle;
    }

    .buttons {
        text-align: start;
        width: 300px;
        margin-left: 65px;
        margin-bottom: 20px;
    }
    .user-login {
        margin-left: -25px;
        width: auto !important;
    }
}
</style>
