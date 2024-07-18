<template >
    <div>
        <h2>Watchers</h2>
        <h5>Watchers is mainly used to observerd the value or pages that has changed.</h5>
        <h1>{{ count }}</h1>
        <button @click="count=count+1">+</button>
        <button @click="count=count-1">-</button>
    </div>
</template>
<script>
export default {
 name:'WatchersVUE',
 data()
 {
    return{
        count:0
    }
 },
 watch:{
    count(val,prev){

       if(val>5 && val>prev)
       {
        this.count=0
        
       }
    }
 }
}
</script>
<style scoped>
    
</style>