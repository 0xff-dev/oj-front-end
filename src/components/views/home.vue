<!-- 主页，写一些通知的问题 -->
<template>
    <div class="home-container">
        <div class="home-title">
            <span class="title"> Home Nortifies </span>
            <span class="refresh-btn">刷新</span>
        </div>
        <div class="notify-list">
            <div class="notify-item">
                <span class="notify-title"> dfsfsdfsdfsdfsdfsd</span>
                <span class="notify-time">2019-00-00 00：10:10</span>
                <span class="publisher">admin</span>
            </div>
            <div class="notify-item">
                <span class="notify-title"> dfsfsdfsdfsdfsdfsd</span>
                <span class="notify-time">2019-00-00 00：10:10</span>
                <span class="publisher">admin</span>
            </div>     
             <div class="notify-item">
                <span class="notify-title"> dfsfsdfsdfsdfsdfsd</span>
                <span class="notify-time">2019-00-00 00：10:10</span>
                <span class="publisher">admin</span>
            </div>     
        </div>
        <Pagination  :nowIndex.sync=nowIndex :total.sync=total></Pagination>
    </div>
</template>

<script>

//import Profile from './profile.vue'
import Pagination from '../pagination.vue'

export default {
    data() {
        return{
            nowIndex: 1,
            total: 10,
        }
    },
    created: function() {
        this.$store.commit('setTabIndex', 0)
    },
    components:{
        Pagination
    }
}
</script>

<style scoped>
.home-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.home-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    padding: 0 30px 0 30px;
    margin: 20px 0 10px 0;
}
.title {
    font-size: 22px;
    font-weight: bold;
}
.refresh-btn {
    background-color: rgb(90, 182, 239);
    color: white;
    border-radius: 5px;
    text-align: center;
    height: 30px;
    line-height: 30px;
    width: 60px;
    user-select: none;
}
.notify-list {
    margin-bottom: 20px;
}
.notify-item {
    display: flex;
    flex-direction: row;
    height: 40px;
    padding: 5px;

    margin: 0px 30px 0 30px;
}
.notify-item span {
    height: 40px;
    line-height: 40px;
}
.notify-list .notify-item:not(:first-child) {
    border-top: 1px solid rgb(238,238,238);
}
.notify-title {
    width: 50%;
    text-align: start;
}
.notify-time {
    width: 25%;
    text-align: center;
}
.publisher {
    width: 25%;
    text-align: center;
}
</style>
