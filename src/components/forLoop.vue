<template>
    <div>
        <h3>For Loop for Array of data</h3>
        <ul>
            <li v-for="item in technology" :key="item">{{ item }}</li>

        </ul><br><br>
        <h3>Oject or List of Data</h3>
        <ul>
            <li v-for="item in user" :key="item">{{ item }}</li>
        </ul>
        <h5>To access single data from the object</h5>
        <ul>
            <li v-for="item in user" :key="item">Name : {{ item.name }} <br> Email: {{ item.email }} </li>

        </ul>
    </div>
</template>
<script>
export default {
    name:'forLoop',
    data(){
        return{
            technology:['java','php','node','vue','react'],
            user:[
              {  name:'gowda',
                email:'gowda@test.com',
                phone_number:'9856453252'
              },
              {  name:'raju',
                email:'raju@test.com',
                phone_number:'9866453252'
              }
            ]
        }
    }

}
</script>
<style scoped>
    div{
    color: rgb(55, 20, 253);
    }
</style>