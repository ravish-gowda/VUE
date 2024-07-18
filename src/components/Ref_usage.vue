<template >
    <div>
        <h2>Ref in vue.js</h2>
        <h2>The Ref is use for set or get data of the Dom</h2>
        <input type="text" ref="input">
        <button @click="getData" >Click Me</button>
    </div>
</template>
<script>
export default {
    name:'RefUsage',
    methods:{
        getData(){
            this.$refs.input.focus()
            let val=this.$refs.input.value
            console.warn(val)
            this.$refs.input.style.color='red'
        }
    }
}
</script>
<style scoped>
    
</style>