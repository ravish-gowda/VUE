<template >
    <div>
        <h1>Computed Property</h1>
        <h5>computed properties are cached based on their depedencies <br> 
            a computed property will only re-evalate when some of its reactive 
        depedencies have chanegd</h5>
        <h1>{{( dollors * ruppeeVal)-discount }}</h1>
        <h1>{{ getResult }}</h1>
        <h2>{{ getResultMethod() }}</h2>
    </div>
</template>
<script>


export default {
    name:'ComputedProperty',
    data(){
        return{
            dollors:100,
            ruppeeVal:70,
            discount:10,

        }
       
    },
    computed:{
            getResult(){
                return (this.dollors*this.ruppeeVal)-this.discount;
            }
        },
        methods:
        {
            getResultMethod()
            {
                return (this.dollors*this.ruppeeVal)-this.discount;
            }   
        },
}
</script>
<style >
    
</style>