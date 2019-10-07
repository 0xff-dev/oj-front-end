<template>
    <div>
        <h1>Online Judge</h1>
    </div>
</template>

<script>


export default {
    created: function() {
        this.$store.commit('setTabIndex', 0)
    }
}
</script>

<style scoped>

</style>
