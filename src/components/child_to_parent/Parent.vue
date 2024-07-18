<template >
    <div>
        <h2>User Component</h2>
        <button v-on:click="getUser(userName)">Send user name</button>
    </div>
</template>
<script>
export default {
    name:"UserData",
    data(){
        return{
            userName:'Gowda'
        }
    },
    props:{
        getUser:Function,
    }
}
</script>
<style scoped>
    h2{
        color: orchid;
    }
</style>