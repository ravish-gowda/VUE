<template >
    <div>
        <h1>beforeMount_and_Mounted</h1>
        <h3>{{ name }}</h3>
        <h1>Ravish Gowda</h1>
    </div>
</template>
<script>
export default {
    name:'beforeMount_and_Mounted',
    data(){
        return{
            name:"Gowda"
        }
    },
    beforeMount()
    {
        console.warn("beforeMount",this.$el)
    },
    mounted()
    {
        console.warn("mounted",this.$el)
    }
}
</script>
<style >
    
</style>