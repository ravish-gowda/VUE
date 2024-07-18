<template >
    <div>
        <h2>Child Name : {{ name }}</h2>
        <h3>User Detailes : {{ user.email }}</h3>
        <button v-on:click="getData">Call Function</button>
    </div>
</template>
<script>
export default {
    name:'childCompo',
  props:{
    name:String,
    user:Object,
    getData:Function

  }
  
    
}
</script>
<style >
    
</style>