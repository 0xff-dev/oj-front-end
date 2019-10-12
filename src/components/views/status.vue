<template>
    <div class="status-container">
        <TableHead
            title="Status"
            :refresh=true
            optionsName="Status"
            cpType="status"></TableHead>
        <div>
            <div class="header">
                <!-- 用户没有登陆这个位置的ac状态就不显示 -->
                <span>When</span>
                <span>ID</span>
                <span>Status</span>
                <span>Problem</span>
                <span>Time</span>
                <span>Memory</span>
                <span>Language</span>
                <span>Author</span>
            </div>
            <div v-for="(item,index) in datas" :key="item.id" :class="index%2==0?'header white-back':'header'" >
                <span>{{item.when}}</span>
                <span>{{item.id}}</span>
                <span class="status-span"><span :style="{'color':colorMap[item.status],'font-weight':'bold'}">{{item.status}}</span></span>
                <span>{{item.problem}}</span>
                <span>{{item.time}}</span>
                <span>{{item.memory}}</span>
                <span>{{item.language}}</span>
                <span>{{item.author}}</span>
            </div>
        </div>
        <Pagination :apiUrl="constUrl" :datas.sync="datas"></Pagination>
    </div>
</template>

<script>
import TableHead from '../tableHead.vue'
import Pagination from '../pagination.vue'

export default {
    name: 'Problems',
    components: {
        TableHead, Pagination
    },
    data: function() {
        return {
            datas: [],
            constUrl: "http://localhost:8888/status",
            colorMap: {
                "Accepted": "red",
                "Wrong Answer": "green",
                "Compile Error": "DarkOrange",
                "Time Limited Error": "green"
            }
        }
    },
    created() {
        this.$store.commit('setTabIndex', 2)
    }
}
</script>

<style scoped>
.status-container {
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

.white-back {
    background-color: white;
}

span {
    width: 12.5%;
    font-size: 15px;
}

.status-span {
    color: white;
    font-size: 15px;
}
</style>
