<template >
    <div >
        <h1>Home Page</h1>
       
      <div class="new">
        <teleport to='#footer' >
      <Footer></Footer>
      </teleport>
      </div>
    </div>
</template>
<script>
import Footer from './Footer.vue'
export default {
    name:'HomePage',
    components:{
        Footer,
    }
}
</script>
<style scoped>
    .new{
        background-color:gray
    }
</style>