<template >
    <div>
        <h2>beforCreated and Created</h2>
        <h3>{{ name }}</h3>
    </div>
</template>
<script>
export default {
    name:'bCandC',
    beforeCreate(){
       
        alert("beforeCreate")
    },
    created(){
         this.name="Gowda"
        alert("created")
    },data(){
        console.warn("created")
       return{
       name:'Ravish Gowda'
       }
    }
    
}
</script>
<style >
    
</style>