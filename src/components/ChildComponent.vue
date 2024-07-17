<template >
    <div>
        <h2>Pass data to Child Component</h2>
        <child name="Gowda" :user="user" :getData="getData"/>
    </div>
</template>
<script>
import child from './child.vue'
export default {
    name:'ChildComponent',
    components:{
        child
},
data(){
 return{
    user:
              {  name:'gowda',
                email:'gowda@test.com',
                phone_number:'9856453252'
              }
 }
},

methods:{
    getData(){
        console.warn("parent function called")
        alert("parent function called")
    }

}
}
</script>
<style>
   div {
color: orange;
    }
</style>