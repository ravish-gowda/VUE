<template>
    <h3 v-on:mousemove="getConsole()">Event Handling</h3>
    <button class="btn" v-on:click="getData('Button Clicked')">Click Me</button><br>
    <button class="btn btn-2" v-on:dblclick="getData('Button Double Clicked')">Click Me</button>
    <h2>{{Count}}</h2>

</template>

<script>
export default{
    name:"EventClick",
    data(){
        return{
            Count:0
        }
    },
    methods:{
        getData(){
           this.Count=this.Count+1;
        },
        getConsole(){
            console.log("Function Called")
        }
    }
}

</script>
<style>
.btn{
    font-size: 25px;
    font-weight: 300;
    color: white;
    background: rgb(76, 5, 242);
    border-radius: 20px;
    border: none;
    margin: 10px;
    font-family:  sans-serif;

}
.btn-2{
    margin: 10px;
}
h2 {
    margin: 10px;
    padding: 10px;
}
</style>