<template >
    <div>
        <h3 v-if="show">If Condition</h3>
        <h3 v-else>Else Condition</h3>
       
        <button v-on:click="show=!show">Show</button>
    </div>
</template>
<script>
export default {
    name:'ifElse',
    data(){
        return{
            show:true,
        }
    }
    
}
</script>
<style scoped>
    
</style>