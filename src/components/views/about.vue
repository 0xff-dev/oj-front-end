<template>
    <h1>About Me</h1>
</template>

<script>
export default {
    created() {
        this.$store.commit('setTabIndex', 5)
    }
}
</script>

<style scoped>

</style>
