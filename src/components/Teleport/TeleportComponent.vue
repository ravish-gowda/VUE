<template >
    <div>
       <h2>Teleport Components</h2> 
       <h3></h3>
      <teleport to='#footer' >
      <Footer></Footer>
      </teleport>
     
    </div>
</template>
<script>
import Footer from './Footer.vue'

export default {
    name:'TeleportComponent',
    components:{
        Footer,
    },
    
}
</script>
<style scoped>
    
</style>