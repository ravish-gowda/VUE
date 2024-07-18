<template >
    <div>
      <h2>Java Programing</h2>  
      <h1>Java Framework</h1>  
      <button @click="tab='jsp'" >Load JSP</button>
      <button @click="tab='servelt'">Load Servlet</button>
      
      
      <component :is="tab"/>
    </div>
</template>
<script>
 import servelt from './servlet.vue'
import jsp from './jsp.vue'
export default {
    name:'javaCompo',
    components:{
        jsp,servelt,
    },
    data(){
        return{
            tab:''
        }
    }
}
</script>
<style >
    
</style>