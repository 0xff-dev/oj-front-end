<template>
    <div>
        <h1>Online Judge</h1>
        <Comment :comments.sync="datas"></Comment>
    </div>
</template>

<script>
import Comment from '../comment.vue'

export default {
    components: {
        Comment,
    },
    data() {
        return {
            datas: []
        }
    },
    // created: function() {
    //     Axios.get("http://localhost:8888/comments").then(response => {this.datas = response.data.data})
    // }
}
</script>

<style scoped>

</style>