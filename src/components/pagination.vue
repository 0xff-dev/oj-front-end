<!-- 分页插件 -->
<template>
    <div class="pagination">
        <div v-if="total < 5">
            <span v-for="index in (1,total)" :key="index" 
                :class="index==nowIndex?'default-span activePage':'default-span'"
                @click="selectPage(index)">
                {{index}}
            </span>
        </div>
        <div v-if="total >= 5">
            <span class="defautl-span span-border" v-if="nowIndex!=1" @click="prePage"><img :src="left"></span>
            <span v-for="index in pages" 
                :key="index" 
                :class="index==nowIndex?'default-span span-border-color activePage':'default-span span-border-color '"
                @click="selectPage(index)">
                    {{index}}
            </span>
            <span class="defautl-span span-border" v-if="nowIndex!=total" @click="nextPage"><img :src="right"></span>
        </div>
    </div> 
</template>

<script>

export default {
    props: {
        total: {
            type: Number,
            required: true
        }
    },
    data: function() {
        return {
            nowIndex: 1, 
            left: require(`../assets/images/left.png`),
            right: require(`../assets/images/right.png`),
            pages: [1,2,3,4,5]
        }
    },
    methods: {
        selectPage: function(index) {
            const that = this;
            that.nowIndex = index
            that.pages = Array.from(function* gen(start, end){
                while(start<=end) yield start++;
            }(that.nowIndex==that.total||that.nowIndex==that.total-1||that.nowIndex==that.total-2?that.total-4:that.nowIndex-2>0?that.nowIndex-2:1, 
                that.nowIndex==1||that.nowIndex==2||that.nowIndex==3?5:that.nowIndex+2<=that.total?that.nowIndex+2:that.total))
        },
        prePage: function() {
            this.nowIndex--
            this.selectPage(this.nowIndex)
        },
        nextPage: function() {
            this.nowIndex++
            this.selectPage(this.nowIndex)
        }
    }
}
</script>

<style scoped>
.pagination {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    height: 50px;
    background-color: rgb(245, 245, 245);
    padding-right: 15px;
}

.pagination > div {
    display: flex;
    align-items: center;
}

.default-span {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    margin-left: 5px;
    cursor: pointer;
}

.span-border {
    border-radius: 50%;
}
.span-border-color {
    border-radius: 5px;
    color:rgb(70, 122, 178);
}

.activePage {
    background-color: rgb(70, 122, 178);
    color: white;
    cursor: pointer;
}

span:not(.activePage):hover {
    background-color: rgb(245, 245, 245);
}

img {
    width: 20px;
    height: 20px;
}
</style>