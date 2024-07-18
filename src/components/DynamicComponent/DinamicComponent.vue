<template >
    <div>
      <h1>Dynamic Component</h1>  
      <button @click="tab='java'" >Load Java</button>
      <button @click="tab='node'">Load Node</button>
      <button @click="tab='php'">Load PHP</button>
      
      <component :is="tab"/>
    </div>
</template>
<script>
import java from'./java.vue'
import php from './php.vue'
import node from './node.vue'
export default {
    name:"DynamicComponent",
    components:{
        node,
        java,
        php,
    },
    data(){
        return{
            tab:''
        }
    }
}
</script>
<style scoped>
    
</style>