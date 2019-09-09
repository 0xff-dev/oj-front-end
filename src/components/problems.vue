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
            <div v-for="(item,index) in problems" :key="item.ID" :class="index%2==0?'header white-back':'header'" >
                <span><img :src="item.IsAc?rightPng:wrongPng" class="ac-img"></span>
                <span>{{item.ID}}</span>
                <span>{{item.Title}}</span>
                <span>{{item.CommitCnt}}</span>
                <span>{{item.AcRate}}</span>
                <span>{{item.Tags}}</span>
            </div>
        </div>
        <Pagination :total=10></Pagination>
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
            problems: [
                {"ID":"1", "Title": "A+B", "CommitCnt": 100, "AcRate":"90%", "Tags":"a+b,h", "IsAc":true},
                {"ID":"2", "Title": "A+B1", "CommitCnt": 100, "AcRate":"80%", "Tags":"a+b1,h","IsAc":true},
                {"ID":"3", "Title": "A+B2", "CommitCnt": 100, "AcRate":"70%", "Tags":"a+b2,h","IsAc":true},
                {"ID":"4", "Title": "A+B3dshdjshdsjdhsjd", "CommitCnt": 100, "AcRate":"60%", "Tags":"a+b3,h","IsAc":true},
                {"ID":"5", "Title": "A+B4", "CommitCnt": 100, "AcRate":"50%", "Tags":"a+b4,h","IsAc":true},
                {"ID":"6", "Title": "A+B5", "CommitCnt": 100, "AcRate":"0%", "Tags":"a+b5,h","IsAc":false},
                {"ID":"7", "Title": "A+B5", "CommitCnt": 100, "AcRate":"0%", "Tags":"a+b5,h","IsAc":false},
                {"ID":"8", "Title": "A+B5", "CommitCnt": 100, "AcRate":"0%", "Tags":"a+b5,h","IsAc":false},
                {"ID":"9", "Title": "A+B5", "CommitCnt": 100, "AcRate":"0%", "Tags":"a+b5,h","IsAc":true},
                {"ID":"10", "Title": "A+B5", "CommitCnt": 100, "AcRate":"0%", "Tags":"a+b5,h","IsAc":false},
                {"ID":"11111", "Title": "A+B5", "CommitCnt": 100, "AcRate":"0%", "Tags":"a+b5,h","IsAc":false},
                {"ID":"12", "Title": "A+B5", "CommitCnt": 100, "AcRate":"0%", "Tags":"a+b5,h","IsAc":false},
                {"ID":"13", "Title": "A+B5", "CommitCnt": 100, "AcRate":"0%", "Tags":"a+b5,h,dskmdsd,d","IsAc":true},
                {"ID":"14", "Title": "A+B5", "CommitCnt": 100, "AcRate":"0%", "Tags":"a+b5,h","IsAc":false},
                {"ID":"15", "Title": "A+B5", "CommitCnt": 100, "AcRate":"0%", "Tags":"a+b5,h","IsAc":false},
            ],
            rightPng: require(`../assets/images/ac.png`),
            wrongPng: require(`../assets/images/wrong.png`)
        }
    }
}
</script>

<style scoped>
.problemContainer {
    background-color: white;
    /* box-shadow: 3px 3px gray; */
    height: 200px;
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