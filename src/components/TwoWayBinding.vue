<template>
    <h1>Two Way Binding</h1>
<input type="text" v-model="count"/>
<h2>{{ count }}</h2>
</template>

<script>
export default{
    name:"TwoWayBinging",
data(){
    return{
        count:0
    }
}
}
</script>

<style scoped>

</style>
