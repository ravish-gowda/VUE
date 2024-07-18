<template >
   
      <div>
        <h3 v-bind="$attrs">Ravish Gowda</h3>
        <h3>Raju</h3>
        <h3>Ranju</h3>
       <h3>if did't add the data:string it will assign to above attrs </h3>
      </div>
   
</template>
<script>
export default {
    name:'userData',
    
    props:{
        id:String,
       
    }
    
}
</script>
<style >
    
</style>