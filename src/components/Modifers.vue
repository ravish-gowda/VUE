<template >
    <div>
       <h2>Modifers</h2>
       <input type="text" v-model.lazy="data"/>
       <h3>Data is:{{ data }}</h3><br>
       <input type="number" name="" id="" v-model.number.lazy=" number"/>
       <h3>Number type:{{ typeof(number) }}</h3>
       <h2>Number is:{{ number }}</h2>

    </div>
</template>
<script>
export default {
    name:"ModifersVUE",
    data()
    {
        return {
            data:'',
            number:''
        }
    }
}
</script>
<style scoped>
    
</style>