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
                <span>{{item.id}}</span>
                <span>{{item.title}}</span>
                <span>{{item.commit_cnt}}</span>
                <span>{{item.ac_rate}}</span>
                <span>{{item.tags}}</span>
            </div>
        </div>
        <Pagination :apiUrl="constUrl" :datas.sync="datas"></Pagination>
    </div>
</template>

<script>
import TableHead from './tableHead.vue'
import Pagination from './pagination.vue'

export default {
    name: 'Problems',
    components: {
        TableHead, Pagination
    },
    data: function() {
        return {
            datas: [],
            rightPng: require(`../assets/images/ac.png`),
            wrongPng: require(`../assets/images/wrong.png`),
            constUrl: "http://localhost:8888/problems"
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

</style>