<!--还未接入后端数据，都是填写的假数据，v-for等待后端接通在写-->
<template>
    <div class="problem-detail-container">
        <div class="problem-info-left">
            <div class="problem-content">
                <mavon-editor
                    ref=md
                    :defaultOpen=disMode
                    :subfield=false
                    :toolbars=toolbars
                    :toolbarsFlag=canShow
                    v-model=datas.content
                    @change="editorContent"
                ></mavon-editor>
            </div>
            <div class="submit-content">
                <Code></Code>
                <div class="submit-code-btn">
                    <img :src="editIcon" style="width: 10px;height: 10px;margin-right: 5px">
                    <span>Submit</span>
                </div>
            </div>
            <div class="problem-comment">
                <Comment></Comment>
            </div>

        </div>
        <div class="problem-info-right">
            <div class="submissions">
                <div class="toggle">
                    <i class="icon-bar"></i>
                    <i class="icon-bar"></i>
                    <i class="icon-bar"></i>
                </div>
                <span style="font-size: 13px;">Submissions</span>
            </div>
            <!-- 根据当前的用户是不是管理选择是否展示 -->
            <div class="submissions submissions-margin" @click="edit">
                <div class="toggle">
                    <i class="icon-bar"></i>
                    <i class="icon-bar"></i>
                    <i class="icon-bar"></i>
                </div>
                <span style="font-size: 13px;">{{canEdit?"保存":"编辑问题"}}</span>
            </div>
            <div class="submissions submissions-margin" @click="edit">
                <div class="toggle">
                    <i class="icon-bar"></i>
                    <i class="icon-bar"></i>
                    <i class="icon-bar"></i>
                </div>
                <span style="font-size: 13px;">上传测试数据</span>
            </div>
            <div class="problem-limit">
                <div class="information-head">
                    <img :src="informationIcon" style="width: 15px;height: 15px;margin-right: 15px;">
                    <span>Information</span>
                </div>
                <div class="information-list">
                    <div class="information-item">
                        <span>ID</span>
                        <span style="font-size: 12px">PID-12345678999</span>
                    </div>
                </div>
            </div>
            <div class="tags-list">
                <P class="tags-list-title">Tags</P>
                <div class="tag">
                    <span v-for="str in datas.tags.split(',')" :key="str">str</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Code from '../code.vue'
import Comment from '../comment.vue'
import Axios from "axios"
export default {
    data: function () {
        return {
            datas: {},
            informationIcon:require(`../../assets/images/information.png`),
            editIcon:require(`../../assets/images/edit.png`),
            constUrl: "http://localhost:8888/api/v1/problem",
            problemHtmlContent: "", // 后端获取，当编辑器update的时候，时刻更新
            toolbars: {
                bold: true, // 粗体
                italic: true, // 斜体
                header: true, // 标题
                underline: true, // 下划线
                strikethrough: true, // 中划线
                mark: true, // 标记
                superscript: true, // 上角标
                subscript: true, // 下角标
                quote: true, // 引用
                ol: true, // 有序列表
                ul: true, // 无序列表
                link: true, // 链接
                imagelink: true, // 图片链接
                code: true, // code
                table: true, // 表格
                help: true, // 帮助
                trash: true, // 清空
                save: true, // 保存（触发events中的save事件）
                preview: true, // 预览
            },
            canEdit: false,
        }
    },
    mounted(){
        this.$store.commit('setTabIndex', -1)
        window.console.log(this.$route.params.id, "get problem info")
    },
    created() {
         this.getProblems(this.$route.params.id)
    },
    computed:{
        canShow() {
            return this.canEdit
        },
        disMode() {
            if(this.canEdit) {
                return "edit"
            }
            return "preview"
        }
    },
    methods: {
        editorContent: function (markdown, html) {
            this.problemHtmlContent = html
            this.mavonData = markdown
            window.console.log(this.mavonData)
        },
        edit: function() {
            this.canEdit = !this.canEdit
        },
        getProblems(id) {
            Axios.get(this.constUrl, {params:{id:id}}).then(resp => {
                this.datas = resp.data.data
            })
        }
    },
    components: {
        Code,Comment,
    },
}
</script>

<style scoped>
.problem-detail-container{
    background-color: rgb(238,238,238);
    display: flex;
    justify-content: space-between;
    align-items: center;
}
/* 左右模块 */
.problem-info-left {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    width: 84%;
    background-color: rgb(238,238,238);
}
.problem-info-right{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 14%;
    height: 100%;
    background-color: rgb(238,238,238);
    align-self: flex-start;
}
/* problem markdown part,The people who has privilege can edit problem content */
.problem-content {
    width: 100%;
    height: auto;
}
/* submit code part */
.submit-content {
    width: 100%;
    height: auto;
    text-align: start;
    background-color: white;
    margin-top: 40px;
}
.submit-code-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    float: right;
    background-color: rgb(241,157,56);
    width: 80px;
    height: 30px;
    line-height: 30px;
    margin-right: 20px;
    text-align: center;
    color: white;
    border-radius: 5px;
    margin-bottom: 10px;
    cursor: pointer;
    user-select: none;
}
/* problem right part submission*/
.submissions {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 40px;
    cursor: pointer;
    border-left-width: 2px;
    background-color: white;
    user-select: none;
}
.submissions:hover{
    color: rgb(76,145,235);
    border-left:2px rgb(76,145,235) solid;
}
.submissions:hover .icon-bar{
    background-color: rgb(76,145,235);
}
.submissions-margin {
    margin-top: 20px;
}
.toggle {
    float: right;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 20px;
    height: 20px;
    border: none;
    outline: none;
    margin: 0 10px;
}
.toggle > .icon-bar {
    width: 20px;
    height: 4px;
    background-color: rgb(74,80,95);
}
.toggle .icon-bar + .icon-bar {
    margin-top: 1px;
}
/* problem limit part*/
.problem-limit{
    background-color: white;
    margin-top: 20px;
    user-select: none;
}
.information-head {
    display: flex;
    justify-content: flex-start;
    padding-left: 10px;
    align-items: center;
    margin-bottom: 20px;
    color: black;
}
.information-list{
    display: flex;
    flex-direction: column;
}
.information-item{
    display: flex;
    justify-content: space-between;
    margin: 0 10px 10px 10px;
    border-bottom: rgb(233,234,236) 1px dashed;
}
.problem-comment{
    background-color: white;
    margin: 40px 0;
}
.tags-list {
    margin-top: 20px;
    background-color: white;
}
.tags-list-title{
    margin-left: 10px;
    margin-bottom: 0 !important;
    font-size: 18px;
    font-weight: bold;
    text-align: start
}
.tag{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px;
}
.tag span{
    width: auto;
    height: 20px;
    padding: 5px;
    border-radius: 8px;
    border: 1px solid rgb(238, 238, 238);
    margin: 0 5px 5px 0;
    font-size: 12px;
    cursor: pointer;
}
.tag span:hover{
    border-color: rgb(76,145,235);
    color: rgb(76,145,235);
}
</style>