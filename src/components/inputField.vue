<template>
<h1>Input Data</h1>
<input type="text" placeholder="Enter your email" v-model="email"/><br><br>
<input type="password" placeholder="Enter your password" v-model="password"/>
<br><br> <button type="button" v-on:click="getData()">Get Values</button>



</template>
<script>
export default {
    name:'inputField',
    data(){
        return{
            email:null,
            password:null
        }
    },
    methods:{
       getData(){
        console.warn("Values : ",this.email,this.password)
       }
    }
}
</script>

<style scoped>

</style>