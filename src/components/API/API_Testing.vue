<template >
    <div>
       <h1>User Data</h1> 
      <ul class="item" v-for="item in list" :key="item.id">
        <li>{{ item.id }}</li>
        <li>{{ item.email }}</li>
        <li>{{ item.first_name }}</li>
        <li><img :src="item.avatar" alt=""></li>


      </ul>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name:'ApiTesting',
    data(){
        return{
            list:[]
        }
    },
    async mounted(){
        let result=await axios.get("https://reqres.in/api/users?page=1")
        console.warn("Api Result",result.data.data)
        this.list=result.data.data
    }
}
</script>
<style scoped>
   .item li{
    display: inline-block;
    width: 180px;
    border: 1px solid;
    text-align: center;
    padding: 5px;
   }
   .item img{
    width: 50px;
   }
   .item{
display: flex;
   }
</style>