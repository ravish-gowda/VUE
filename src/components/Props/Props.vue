<template >
    <div>
       <h1>Props </h1> 
       <Student :name='name'/>
       <Teacher :name="name"/>
    </div>
</template>
<script>
import Student from './StudentProps.vue'
import Teacher from './TeacherProps.vue'
export default {
    name:"PropsUsage",
    data(){
return{
    name:"Gowda"
}
    },
    components:{
        Student,
        Teacher,
    }

}
</script>
<style scoped>
    
</style>