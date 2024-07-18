<template >
    <div>
       <h1 ref="user">User Component</h1> 
    </div>
</template>
<script>
export default {
    name:'UserData',
    beforeUnmount()
    {
        console.log("beforeUnMount",this.$refs['user']);
    },
    unmounted()
    {
        console.log("UnMounted",this.$refs['user'])
    }


}
</script>
<style >
    
</style>