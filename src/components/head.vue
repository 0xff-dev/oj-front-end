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
                    <li v-for="item in items" :key="item">
                        <img :src="item.src">
                        <span>{{item.name}}</span>
                    </li>
                </ul>
                <div class="buttons">
                    <button >Login</button>
                    <button >Register</button>    
                </div>
            </div>
        </transition>
    </div>
</template>

<script>

export default {
    data() {
        return {
            items: [{
                id: 1,
                name: 'Home',
                src:''
            },{
                id: 2,
                name: 'Problems',
                src:''
            },{
                id: 3,
                name: 'Status',
                src:''
            },{
                id: 4,
                name: 'Contests',
                src:''
            },{
                id: 5,
                name: 'Rank',
                src:''
            },{
                id: 6,
                name: 'About',
                src:''
            }],
            show: document.body.clientWidth > 1060
        }
    },
    created: function() {
        this.items.forEach( item => {
            item.src = require(`../assets/images/${item.name}.png`)
        });
        this.show = document.body.clientWidth >= 1060
    },
    mounted () {
        const that = this;
        window.onresize = () => {
            that.show = document.body.clientWidth >= 1060
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
    justify-content: space-around;
    align-items: center;
    margin-left: 30px;
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
        justify-content: space-around;
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
}
</style>
