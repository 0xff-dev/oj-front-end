<!-- 该组件是对problems和status共有头部的抽象 -->
<template>
    <div class="table-head">
        <p class="p-title">{{title}}</p>
        <div class="ops">
            <div v-if="refresh" class="refresh-btn"><span><img :src="refreashIcon"></span>Refresh</div>
            <div class="search">
                <input type="text" v-model="searchContent" placeholder="search" @keyup.enter="submit" />
            </div>
            <div class="option" @click="show = !show">
                <span>{{optionsName}}<span><img :src="downIcon"></span></span>
                <transition name="fade">
                    <div class="sub-menu" v-if="show">
                        <!--到时候改成for循环-->
                        <p @click="alertt">fdffdfdfdsdsdsdsdsdsd</p>
                        <p>f434</p>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data: function() {
        return {
            show: false,
            refreashIcon: require(`../assets/images/refresh.png`),
            downIcon: require(`../assets/images/down.png`),
            searchContent: ''
        };
    },
    props: {
        // 对应组件的名称
        title: {
            type: String,
            required: true
        },
        // 是否添加刷新按钮
        refresh: {
            type: Boolean,
            required: true
        },
        // 针对多虑条件的列表
        optionsName: {
            type: String,
            required: true
        },
        // 搜索类型，搜索问题，搜索提交状态
        cpType: {
            type: String,
            required: true
        }
    },
    // 一流的问题，我的组件针对不用的地方使用，然后提供的函数
    // 我觉得是由后端提供接口，进行牛逼的返回
    methods: {
        // 对搜索框的接口调用, 提供cptype
        search: () => {

        },
        // 根据cpType 请求不同情况的运行状态，或者不同tags
        tags: () => {

        },
        // 针对刷新按钮的
        refreash: () => {

        },
        alertt: () => {
            alert("Hello", "fdfdfd")
        },
        submit: function() {
            alert(`You are submit somethng: ${this.searchContent}`)
        }
    },
    created: () => {
        // 需要调用的函数，加载数据
    }
}
</script>


<style scoped>
.table-head {
    display: flex;
    align-items: center;
    padding: 0 30px;
}

.p-title {
    text-align: start;
    font-size: 20px;
    font-weight: bold;
}
.table-head > p {
    width: 25%;
}

.ops {
    width: 75%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
}

.ops > div {
    margin-left: 40px;
}

.refresh-btn {
    display: flex;
    align-items: center;
    background-color: rgb(90, 182, 239);
    color: white;
    width: 80px;
    height: 30px;
    border-radius: 5px;
    cursor: pointer;
}
.refresh-btn span {
    display: inline-block;
    text-align: center;
    width: 18px;
    height: 18px;
}
img {
    width: 15px;
    height: 15px;
}
.search input {
    width: 160px;
    height: 25px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(238,238,238);
    padding:  0px 5px;
}
.option {
    display: flex;
    align-items: center;
    flex-direction: column;
}
.sub-menu {
    position: absolute;
    display: block;
    margin-top: 30px;
    z-index: 200;
    box-shadow: 0px 0px 3px rgb(133, 129, 129);
}
.sub-menu p {
    padding: 0 8px;
}
.sub-menu p:hover {
    background-color: rgb(248,248,249);
}
</style>