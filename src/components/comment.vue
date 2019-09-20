<template>
    <div class="comment-container">
        <div class="comment" v-for="(out, outIndex) in commentsData" :key="outIndex">
            <div class="father-content">
                <div class="head-icon">
                     <img :src="headIcon">
                </div>
                <div class="comment-content">
                    <a>{{out.who}}&nbsp;&nbsp;:</a>{{out.content}}
                    <div class="time-reply">
                        <span>12:30</span> <span class="reply-btn" @click="showInput(outIndex,0, out.who)">回复</span>
                    </div>
                </div>
            </div>
            <div class="reply-list" >
                <div class="reply-item" v-for="(inner, innerIndex) in out.comments" :key="innerIndex">
                    <div class="head-icon">
                        <img :src="headIcon">
                    </div>
                    <div class="comment-content">
                        <a>{{inner.who}}</a>&nbsp;&nbsp;回复&nbsp;&nbsp;<a>{{inner.reply_user}}</a>&nbsp;&nbsp;:{{inner.content}}
                         <div class="time-reply">
                            <span>12:30</span> <span class="reply-btn" @click="showInput(outIndex, innerIndex, inner.who)">回复</span>
                        </div>
                    </div>
                </div>
                <div class="comment-frame" v-if="x==outIndex">
                    <textarea cols="80" rows="50" v-model="commentData"></textarea>
                    <button @click="publishComment(outIndex, 0, out.comment_id)">评论个锤子</button>
                </div>
            </div>
        </div>
        <div class="comment-frame" v-if="(y == -1 && x != -1) || (x==-1 && y==-1)">
            <textarea cols="80" rows="50" v-model="commentData"></textarea>
            <button @click="publishComment(outIndex, -1, '', problemId)">评论个锤子</button>
        </div>
    </div>
</template>

<script>

import Axios from 'axios'

export default {
    data: function() {
        return {
            commentsData: [],
            headIcon: require(`../assets/images/head.png`),
            problemId: "1",
            replyUser: "",
            commentData: "", // 指用户在打开回复的时候，填入数据，点击旁边，输入框不会消失, 否则会消失，同时也是数据双向绑定
            // x和y是为了定位输入框的问题
            // 用户评论的时候，首先向数组添加数据，再去发请求
            x: -1,
            y: -1
        }
    },
    created: function() {
        Axios.get("http://localhost:8888/comments").then(response => {this.commentsData = response.data.data})
    },
    methods: {
        showInput: function(_x, _y, username) {
            this.x = _x
            this.y = _y
            this.replyUser = username
            window.console.log("x: ", this.x, " y: ", this.y)
        },
        closeInput: function() {

        },
        publishComment: function(x, y, father) {
            this.x = -1
            this.y = -1
            const comment = this.commentData
            let _type = 0
            let inputData = {"comment_id": "7788", "content": comment, "who": "user1", "reply_user": "", "father": "pid"}
            if(y == -1) {
                _type = 1
            } else {
                inputData.reply_user = this.replyUser
                inputData.father = father
            }
            inputData["type"] = _type
            this.commentData = ""
            Axios.post("http://localhost:8888/comments1", inputData).then(response => {this.commentsData = response.data.data})
        }
    }
}
</script>


<style scoped>
.comment-container{
    width: 50%;
    height: auto;
    margin: 10px;   
}

.father-content {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
}

.head-icon {
    width: 40px;
    height: 40px;
    margin-right: 10px;
}

img {
    width: 100%;
    height: 100%;
}

.reply-btn {
    margin-left: 20px;
    color: rgb(16, 180, 230);
    cursor: pointer;
}

.reply-list {
    width: 100%;
   
}
.reply-item {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 10px 0 0 0;
    margin-left: 45px;
}

.comment-content{
    word-break: break-all; 
    text-align:start;
    word-wrap:break-word; 
    width:80%;
    height:auto
}

.comment-frame {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 80%;
    text-align: start;
}

.comment-frame button {
    align-self: flex-end;
    border: none;
    outline: none;
    margin-top: 5px; 
    width: 80px;
    height: 30px;
    background-color: hsl(212, 89%, 51%);
    color: white;
    border-radius: 5px; 
}
textarea {
    outline: none;
    padding: 5px;
    resize: none;
    border: gray 1px solid;
    border-radius: 5px;
    border-width: 2px;
}
.comment-frame textarea {
    width: 100%;
    height: 50px;
}
</style>