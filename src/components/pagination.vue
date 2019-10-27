<!-- 分页插件 -->
<template>
    <div class="pagination" v-if="pageCnt != 0">
        <div v-if="total < 5">
            <span v-for="index in (1,total)" :key="index" 
                :class="index==pageIndex?'default-span activePage':'default-span'"
                @click="selectPage(index)">
                {{index}}
            </span>
        </div>
        <div v-if="total >= 5">
            <span class="default-span span-border" v-if="pageIndex!=1" @click="prePage"><img :src="left"></span>
            <span v-for="index in pages" 
                :key="index" 
                :class="index==pageIndex?'default-span span-border-color activePage':'default-span span-border-color '"
                @click="selectPage(index)">
                    {{index}}
            </span>
            <span class="default-span span-border" v-if="pageIndex!=total" @click="nextPage"><img :src="right"></span>
        </div>
    </div> 
</template>

<script>
export default {
    props: {
        nowIndex: {
            type: Number,
            required: true
        },
        total: {
            type: Number,
            required: true
        }
    },
    data: function() {
        return {
            left: require(`../assets/images/left.png`),
            right: require(`../assets/images/right.png`),
            pages: [1,2,3,4,5]
        }
    },
    created: function() {
        this.selectPage(1)
    },
    computed: {
        pageIndex() { return this.nowIndex },
        pageCnt() { return this.total }
    },
    watch: {
        total(newVal) {
            this.total = newVal
            this.calculatePages()
        }
    },
    methods: {
        selectPage: function(index) {
            this.nowIndex = index
            this.$emit('update:nowIndex', index)
            this.calculatePages()
        },
        calculatePages() {
            if(this.total >= 5) {
                this.pages = Array.from(function* gen(start, end){
                    while(start <= end) yield start++;
                }(this.pageIndex >= this.total-2?this.total-4:this.pageIndex-2>0?this.pageIndex-2:1, 
                    this.pageIndex <= 3?5:this.pageIndex+2<=this.total?this.pageIndex+2:this.total))
            }
            if(this.pageIndex > this.total) {
                this.nowIndex = this.total
            }
        },
        prePage: function() {
            this.selectPage(--this.pageIndex)
        },
        nextPage: function() {
            this.selectPage(++this.pageIndex)
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
    user-select: none;
}

.span-border {
    border-radius: 50%;
    margin: 0 5px;
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