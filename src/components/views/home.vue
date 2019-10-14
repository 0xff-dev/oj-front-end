<template>
    <div>
        <AddProblem></AddProblem>
    </div>
</template>

<script>

import AddProblem from './add_problem.vue'

export default {
    created: function() {
        this.$store.commit('setTabIndex', 0)
    },
    components:{
        AddProblem
    }
}
</script>

<style scoped>

</style>
