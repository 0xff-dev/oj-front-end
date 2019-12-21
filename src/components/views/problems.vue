<template>
    <div class="problemContainer">
        <TableHead
            title="Problmes List"
            :refresh=true
            optionsName="Tags"
            cpType="search"></TableHead>
        <div class="problem-list">
            <div class="header">
                <!-- 用户没有登陆这个位置的ac状态就不显示 -->
                <span>Solved</span>
                <span>ID</span>
                <span>Title</span>
                <span>Total</span>
                <span>AcRate</span>
                <span>Tags</span>
            </div>
            <div v-for="(item,index) in datas" :key="item.id" :class="index%2==0?'header white-back':'header'" >
                <span><img :src="item.is_ac?rightPng:wrongPng" class="ac-img"></span>
                <router-link :to="{name:'problem_detail', params:{id:item.id}}" tag="span" class="router-link-span">{{item.id}}</router-link>
                <router-link :to="{name:'problem_detail', params:{id:item.id}}" tag="span" class="router-link-span">{{item.problem_name}}</router-link>
                <span>{{item.commit_cnt}}</span>
                <span>{{(item.accept_cnt/item.commit_cnt).toFixed(2)+" %"}}</span>
                <span>{{item.tags}}</span>
            </div>
        </div>
        <Pagination  :nowIndex.sync=nowIndex :total.sync=total></Pagination>
    </div>
</template>

<script>
import TableHead from '../tableHead.vue'
import Pagination from '../pagination.vue'

import Axios from 'axios';

export default {
    name: 'Problems',
    components: {
        TableHead, Pagination
    },
    data: function() {
        return {
            datas: [],
            nowIndex: 1,
            total: 0, 
            rightPng: require(`../../assets/images/ac.png`),
            wrongPng: require(`../../assets/images/wrong.png`),
            constUrl: "http://localhost:8888/api/v1/problems"
        }
    },
    created() {
        this.$store.commit('setTabIndex', 1)
        this.getProblems()
    },
    watch: {
        nowIndex(newVal) { 
            this.nowIndex = newVal
            this.getProblems()
        }
    },
    methods: {
        getProblems() {
            Axios.get(this.constUrl, {params:{page:this.nowIndex}}).then(resp => {
                this.datas = resp.data.data
                this.total = resp.data.count
            })
        }
    }
}
</script>

<style scoped>
.problemContainer {
    background-color: white;
    box-shadow: 0px 0px 5px gray;
    height: auto;
}

.header {
    display: flex;
    align-items: center;
    background-color: rgb(248,248,249);
    height: 40px;
}

.ac-img {
    width: 15px;
    height: 15px;
}
.white-back {
    background-color: white;
}
.header span {
    width: 10%;
}
.header span:nth-child(3) {
    width: 30%;
}
.header span:last-child {
    width: 30%;
}
.router-link-span{
    cursor: pointer;
}

</style>
