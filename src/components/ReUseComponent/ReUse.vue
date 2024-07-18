<template >
    <div>
        <h2>Reuse Componet</h2>
        
        <ul>
            <li v-for="data in user" :key="data.name"><User :data="data" :getData="getData"/></li>
        </ul>
        
    </div>
</template>
<script>
import User from "./User.vue"
export default {
    name:"ReUse",
    components:{
        User
    },
    methods:{
        getData(name){
            alert(name)
        }
    },
    data()
    {
        return{
            user:[
                {name:'Gowda',email:'gowda@test.com'},
                {name:'Raju',email:'raj@test.com'},
                {name:'Appu',email:'appu@test.com'},
                {name:'Ranju',email:'ranju@test.com'}
            ]
        }
    }
}
</script>
<style scoped>
    h2{
        color: orangered;
        
    }
    li{
        list-style: none;
    }
</style>