<template >
    <div>
    <h2>Slots are used to hover come from the components limitation </h2> 
    <h3>diffrence bteween slots and component</h3>
    <h3>we can only send the normal data only but <br>
         in slots we can end the send the html tags and image etc.. </h3>
    <h4>we can also assign the default value for slots for empty</h4>   
    <Child/>
   <Child><h2>Ravish Gowda</h2></Child>
   <Child><a href="#">Click me</a></Child>
   <Child><img src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Amazing-Background-Images-Nature.jpg" alt="" /></Child>
   
    </div>
</template>
<script>
import Child from './Child.vue'
export default {
    name:'SlotsVue',
components:{
    Child,
}
}
</script>
<style scoped>
    img{
        width: 500px;
    }
</style>