<template >
    <div>
   
    <MultiChild>
        <template v-slot:header>
            <h1 >Ravish Gowda</h1>
        </template>
   <template v-slot:content>
    <p>Vue Js Product</p>
   </template>
   <template v-slot:footer>
    <button>Buy Now</button>
   </template>
    </MultiChild>
<br>
    <MultiChild>
        <template v-slot:header>
            <h1 >Facebook</h1>
        </template>
   <template v-slot:content>
    <p>React Js Product</p>
   </template>
   <template v-slot:footer>
   
   </template>
    </MultiChild>
    </div>
</template>
<script>
import MultiChild from './MultiChild.vue'
export default {
    name:'SlotsVue',
components:{
    MultiChild,
}
}
</script>
<style scoped>
   
</style>