<!-- 代码提交模块 -->
<template>
    <div class="code-submit">
        <div class="code-head">
            <span style="font-family: 'Andale Mono';font-weight: bold">Language:</span>
            <div class="language-select">
                <div class="show-select" @click="isShowLanguageList">
                    <span class="selected-language">{{language}}</span>
                    <span class="img-span"><img :src="rotateIcon" :class="direction?'img-normal':'img-inverse'"></span>
                </div>
                <div class="language-list"  v-if="showLanguageList">
                    <span v-for="item in languages" :key="item" :class="item===language?'language-active-span':''" @click="onLangChange(item)">{{item}}</span>
                </div>
            </div>
            <span class="reset-img-span" @click="resetCode"><img :src="resetIcon" class="reset-img"></span>
        </div>
        <div class="code-content">
            <codemirror :options="cmOptions" v-model="code" ref="myEditor"></codemirror>
        </div>
    </div>
</template>

<script>
import { codemirror } from 'vue-codemirror-lite'

import 'codemirror/theme/solarized.css'
import 'codemirror/mode/clike/clike.js'
import 'codemirror/addon/selection/active-line.js'

    export default {
        name: "code",
        data() {
            return {
                language: "C",
                rotateIcon: require(`../assets/images/up.png`),
                resetIcon: require(`../assets/images/reset.png`),
                direction: true,
                cmOptions: {
                    tabSize: 4,
                    mode: 'text/x-c++src',
                    theme: 'solarized',
                    lineNumbers: true,
                    line: true,
                    styleSelectedText: true,
                    lineWrapping: true,
                    smartIndent: true
                },
                // https://codemirror.net/mode/clike/index.html
                mode:{
                    'C': 'text/x-csrc',
                    'C++':'text/x-c++src',
                    'Java': 'text/x-java'
                },
                code:"", // your code
                languages:["C", "C++", "Java"], // support language
                showLanguageList: false
            }
        },
        computed: {
            editor() {
                return this.$refs.myEditor.editor
            }
        },
        methods: {
            onLangChange(language) {
                this.language = language
                this.editor.setOption('mode', this.mode[language])
                this.isShowLanguageList()
            },
            resetCode() {
                this.code = ""
            },
            isShowLanguageList(){
                this.direction = !this.direction
                this.showLanguageList = !this.showLanguageList
            }
        },
        components:{
            codemirror,
        }
    }
</script>

<style scoped>
.code-submit {
    width: 100%;
    height: auto;
    background-color: white;
}
.code-head {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 15px;
}

.code-content {
    margin: 15px;
}

.language-select {
    margin: 0 10px;
    position: relative;
}
.selected-language {
    text-align: start;
}

/* language select list */
.language-list {
    padding: 5px 0;
    position: absolute;
    float: top;
    width: 190px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 3px;
    margin-top: 10px;
    z-index: 50;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.language-list span {
    padding-left: 10px;
}

.language-list span:not(.language-active-span):hover {
    background-color: rgb(243,243,243);
}
.language-active-span {
    background-color: rgb(78,134,209);
    color: white;
}

.reset-img-span {
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: rgb(247,247,247);
    border-radius: 5px;
    cursor: pointer;
}
.reset-img {
    width: 12px;
    height: 12px;
}
.show-select {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 180px;
    padding: 0 5px;
    border: 1px solid rgb(221,222,225);
    user-select: none;
    border-radius: 5px;
}
.show-select:hover{
     border: 1px solid rgb(150,188,238);
}

/* image inverse css*/
.img-normal {
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transition: transform .5s;
    width: 12px;
    height: 12px;
}
.img-inverse {
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transition: transform .5s;
    width: 12px;
    height: 12px;
}
</style>
