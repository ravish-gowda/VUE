<template>
  <div id="app">
   <!-- <div class="container">
      <Home/>
      </div>
      <div class="event">
        <Event/>
      </div>
      <div class="two-way-binding">
        <TwoWayBinging/>
      </div>
    
      <div class="input-data">
        <InputData/>
      </div>
      <div>
        <CheckboxRadiobtn/>
      </div>
      <ifelse/>
      <forLoop/>
      
       <ChildComponent/>
       <ReUse/>
       -->
      <HtmlBinding/>
    
  </div>
</template>

<script>
//import Home from './components/Home.vue';
//import Event from './components/Event.vue'
//import TwoWayBinging from'./components/TwoWayBinding.vue'
//import InputData from './components/inputField.vue'
//import CheckboxRadiobtn from './components/CheckboxRadiobtn.vue'
//import ifelse from './components/ifelse.vue'
//import forLoop from './components/forLoop.vue'
//import ChildComponent from './components/ChildComponent.vue'
//import ReUse from'./components/ReUse.vue'
import HtmlBinding from './components/HtmlBinding.vue'
export default {
  name: 'App',
  components: {
   // Home,
   // Event,
   //TwoWayBinging,
   //InputData,
   //CheckboxRadiobtn,
   //ifelse,
   //forLoop,
   //ChildComponent,
   //ReUse,
   HtmlBinding,
   
  }
}
</script>

<style>
#app {
 
  
}
.container {
  display: flex;
 /* Example: Limit maximum width of container */
  width: 100%;
  padding: 0; /* Example: Add padding around container */
}


body {
  margin: 0; /* Remove default margin */
  font-family: Arial, sans-serif; /* Example: Set default font-family */
 /* background: url('./assets/back.jpg') center center/cover no-repeat; /* Background image */
}
</style>
