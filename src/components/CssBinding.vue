<template>
<div>
    <h2>Css Binding</h2>
    <h2 :class="applyStyle">Home Component</h2>
    <button v-on:click="colorfull=!colorfull">Apply Style</button>
</div>
</template>

<script>
export default {
    name: "CssBinding",
    data() {
        return {
            colorfull: false
        };
    },
    computed:{
        applyStyle(){
            return{
                green:this.colorfull,
                err:true,
                other:false
            }
        }
    }

};
</script>

<style scoped>
h2 {
    color: orange;

}

.green {
    background-color: #deec0d;
    width: 300px;
    padding: 20px;
}

.err {
    color: red;
}

.other {
    font-size: 50px;
}
</style>
