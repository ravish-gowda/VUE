<template >
    <div>
        <h1 >beforeUpdate and Updated</h1>
        <h2 ref="counter">{{ count }}</h2>
        <button @click="count=count+1">Update Count</button>
    </div>
</template>
<script>
export default {
    name:'bUandU',
    data(){
        return{
            count:0
        }
    },
    beforeUpdate(){
        console.log("beforeUpdate", this.$refs['counter'].textContent);
    },
    updated(){
        console.log("Updated",this.count)
    }
}
</script>
<style scoped>
    
</style>