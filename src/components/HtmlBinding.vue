<template >
    <div>
        <h2>{{ text }}</h2>
        <div v-html="tag"></div>
        <div v-html="tag2"></div>

        
    </div>
</template>
<script>
export default {
    name:"HtmlBinding",
    data(){
        return{
            text:"Gwoda",
            tag:"<h1>Gowda</h1>",
            tag2:"<h2>gowda@test.com</h2>"
        }
    }
}
</script>
<style scoped>
    
</style>