<template>
    <div class="problemContainer">
        <TableHead 
            title="Problmes List"
            :refresh=true
            optionsName="Tags" 
            cpType="search"></TableHead>
        <p>dappp</p>
    </div>
</template>

<script>
import TableHead from './tableHead.vue'

export default {
    name: 'Problems',
    components: {
        TableHead
    }
}
</script>

<style scoped>
.problemContainer {
    background-color: white;
    box-shadow: 3px 3px gray;
    height: 200px;
}
</style>