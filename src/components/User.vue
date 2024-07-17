<template>
<div>
    <h2>{{data.name}}</h2>
    <h2>{{data.email}}</h2>
    <button v-on:click="getData(data.name)">Alert Name</button>
</div>
</template>

<script>
export default {
    name: 'UserReuse',
    props: {
        data: Object,
        getData:Function
    },
    

}
</script>

<style scoped>
div {
    background: skyblue;
    border-bottom: 1px solid;
    padding: 10px;
    margin-bottom: 20px;
}
</style>
