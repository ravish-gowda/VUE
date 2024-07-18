<template>
<div>
    <!-- <h1>beforeUnMount and Unmounted</h1>
        <h4>it is use to improve effency of project</h4>-->
    <button v-on:click="show=!show">Toogle</button>
    <UserData v-if="show" />
</div>
</template>

<script>
import UserData from './User_unMount.vue'
export default {
    name: 'bUnM_and_UnM',
    components: {
        UserData,
    },
    data() {
        return {
            show: true
        }
    },

}
</script>

<style>
button {
    margin: 20px;
    padding: 2px;
}
</style>
