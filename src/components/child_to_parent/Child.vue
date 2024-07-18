<template >
    <div>
       <h2>Send Data Child to Parent</h2>
       <user :getUser="getUserName"/> 
       <h2>{{ childUser }}</h2>
    </div>
</template>
<script>
import user from './Parent.vue'
export default {
    name:'ChildComponent',
    components:{
        user,
    },
    methods:{
        getUserName(name){
            //alert(name)
            this.childUser=name
        }
    },
    data(){
        return{
            childUser:""
        }
    }
}
</script>
<style scoped>
    h2{
        color: orangered;
    }
</style>