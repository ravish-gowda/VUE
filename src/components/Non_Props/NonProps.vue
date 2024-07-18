<template >
    <div>
      <h1>Non-Props</h1> 
      <User data="Props data" id="user-cmp"/> 
    </div>
</template>
<script>
import User from './User.vue';
export default {
    name:'NonProps',
    components:{
User,
    }
}
</script>
<style scoped>
    
</style>