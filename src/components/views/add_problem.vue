<!--
    管理添加问题的界面,在进入的时候先获取应该出现的问题的ID,添加完转到问题详情，并且提示没有添加测试数据
    给添加数据的界面就是左右分屏？纠结
    // 需要的接口 获取标签的接口
    // 考虑在该页面给他添加

    // 在发请求的注意对数据的检验. 那些字段必填的，考虑给出提示
-->
<template>
    <div class="add-problem">
        <div class="problem-information">
            <div class="problem-information-item">
                <span class="problem-information-Tip">标题</span>
                <input class="problem-input" type="text" placeholder="输入标题...">
            </div>
            <div class="problem-information-item">
                <span class="problem-information-Tip">内存限制</span>
                <input class="problem-input input-limit" type="text" placeholder="内存限制...">
                <span style="margin-left: 5px; font-size: 12px;">mb</span>
            </div>
            <div class="problem-information-item">
                <span class="problem-information-Tip">时间限制</span>
                <input class="problem-input input-limit" type="text" placeholder="时间限制...">
                <span style="margin-left: 5px; font-size: 12px;">ms</span>
            </div>
            <div class="problem-information-tags">
                <span class="problem-information-Tip">标签</span>
                <div>
                    <div class="selected-list" @click="inverseImg">
                        <span style="font-size: 12px;color: red">请点开选择标签</span>
                        <img :src="directionIcon" :class="iconDirection?'img-normal':'img-inverse'">
                    </div>
                    <div class="tags-list" v-if="!iconDirection">
                        <span v-for="item in tagsList" :key="item" :class="selectTagIdList.indexOf(item.id)!==-1?'active-span':'default-span'"
                              @click="addOrDel(item.id)">{{item.name}}</span>
                    </div>
                </div>
                <div>
                    <span class="add-tag-btn" @click="showAddPanel">添加标签</span>
                    <div class="add-tag-panel" v-if="showPanel">
                        <div class="add-tag-item">
                            <span>标签名</span>
                            <input type="text" v-model="tagName">
                        </div>
                        <div class="operation-btn">
                            <span @click="addCancel">取消</span>
                            <span @click="addDone">完成</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
         <mavon-editor
            :toolbars="toolbars"
            ref="md"
            :shortCut=false
            @change="onChange"
        ></mavon-editor>
        <span class="submit-btn" @click="submit">提交</span>
    </div>
</template>

<script>
export default {
    name: "AddProblem",
    data() {
        return {
            problemContent: "",
            problemID: "",
            directionIcon: require(`../../assets/images/up.png`),
            iconDirection: true,
            showPanel: false,
            tagName: "",
            selectTagIdList: [],
            tagsList:[],
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
                /* 1.4.2 */
                navigation: true, // 导航目录
                /* 2.2.1 */
                subfield: true, // 单双栏模式
                preview: true, // 预览
            }
        }
    },
    methods: {
        submit:function () {
            window.console.log(this.problemContent)
        },
        onChange(markdown, html) {
            this.problemContent = markdown
            window.console.log(html)
        },
        inverseImg() {
            this.iconDirection = !this.iconDirection
        },
        addOrDel(id) {
            let idIndex = this.testList.indexOf(id)
            if(idIndex === -1){
                this.testList.push(id)
            } else {
                this.testList.splice(idIndex, 1)
            }
        },
        showAddPanel() {
            this.showPanel = !this.showPanel

        },
        addCancel() {
            this.showPanel = false
            this.tagName = ""
        },
        addDone() {
            this.showAddPanel()
            // 发请求
            alert(this.tagName)
        }
    },
    created(){
        // 测试文件 CID.json, 里面上传的问价，cid-1.png, cid-2.png ...

    }
}
</script>


<style scoped>
.add-problem {
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

/* 添加问题需要填写的信息 */
.problem-information {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 20px 40px;
    width: 60%;
}
.problem-information-item{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 15px;
}
.problem-information-Tip {
    font-size: 16px;
    font-weight: bold;
}
.problem-input {
    margin-left: 30px;
    border: 1px solid rgb(238,238,238);
    outline: none;
    height: 25px;
    line-height: 25px;
    width: 300px;
    padding-left: 5px;
    border-radius: 5px;
}
.input-limit {
    width: 80px;
}
.problem-input:hover {
    border-color: rgb(76,145,235);
}
.problem-information-tags {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}
.selected-list {
    width: 240px;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 10px;
    border: 1px solid rgb(238, 238, 238);
    border-radius: 5px;
    padding:0 5px;
}

.tags-list {
    position: absolute;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 240px;
    height: auto;
    box-shadow: 0 0 10px rgba(128, 128, 128, 0.7);
    margin: 10px 0 0 10px;
    border-radius: 5px;
    z-index: 500;
    padding:0 0 5px 5px;
    background-color: white;
}

.tags-list span {
    width: auto;
    height: 20px;
    padding: 0 5px;
    line-height: 20px;
    cursor: pointer;
    user-select: none;
    border-radius: 5px;
    margin: 5px 5px 0 0;
}
.default-span {
    border: 1px solid rgb(238, 238, 238);
    color: black;
}
.active-span {
    border: 1px solid rgb(119,186,181);
    color:  rgb(119,186,181);
}

.add-tag-btn {
    background-color: rgb(76,145,235);
    color: white;
    width: 60px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    border-radius: 5px;
    font-size: 10px;
    cursor: pointer;
    padding: 5px;
    user-select: none;
}

.submit-btn {
    margin: 20px 10px 10px 0;
    background-color: rgb(93,146,226);
    color: white;
    width: 80px;
    height: 30px;
    line-height: 30px;
    align-self: flex-end;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    user-select: none;
}

.add-tag-panel{
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    z-index: 300;
    border-radius: 10px;
    margin-top: 10px;
    width: 260px;
    box-shadow: 0 0 10px rgba(128, 128, 128, 0.7);
    padding: 0 10px;
}

.add-tag-panel div {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    margin: 8px;
}
.add-tag-item input {
    outline: none;
    width: 66%;
    border-radius: 5px;
    height: 20px;
    border: solid 1px rgb(238, 238, 238);
}
.add-tag-panel input:hover{
    border-color: rgb(93,146,226);
}

.operation-btn span {
    width: 60px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    user-select: none;
}
.operation-btn span:first-child{
    border: 1px solid rgb(238, 238, 238);
    font-size: 12px;
}

.operation-btn span:last-child{
    border: 1px solid rgb(93,146,226);
    background-color: rgb(93,146,226);
    color: white;
    font-size: 12px;
}
</style>
