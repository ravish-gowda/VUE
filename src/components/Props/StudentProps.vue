<template >
    <div>
        <h2>Student Name : {{ name }}</h2>
    </div>
</template>
<script>
export default {
    name:'StudentProps',
    props:{
        name:String,
    }

}
</script>
<style scoped>
    
</style>