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
      <Parent/>
      <ReUse/>
      <HtmlBinding/>
      <CssBinding/>
       <Props/>
        <Child/>
         <RefUsage/>
         <SimpleForm/> 
         <Modifers/> 
         <NonProps/>
          <ComputedProperty/>
          <Watchers/>
           <Slots/>
           <MultiSlots/>
           <DynamicComponent/>
    <TeleportComponent />
     <bCandC/>
     <bMandM/>
      <bUandU/>
       <bUnM_and_UnM/>
       -->
  
<ApiTesting/>
</div>
<!--<div>
<router-link to="/">Home</router-link><br><br>
<router-link to="/login">Login</router-link><br><br>
<router-link to="/porfile/anil">Anial' Profile</router-link><br><br>
<router-link to="/porfile/gowda">Gowda's Profile</router-link><br><br> 
<router-link to="/porfile/ravish">Ravish Profile</router-link><br><br>

<router-view></router-view>
</div>-->
</template>

<script>


//import Home from './components/Home.vue';
//import Event from './components/Event.vue'
//import TwoWayBinging from'./components/TwoWayBinding.vue'
//import InputData from './components/inputField.vue'
//import CheckboxRadiobtn from './components/CheckboxRadiobtn.vue'
//import ifelse from './components/ifelse.vue'
//import forLoop from './components/forLoop.vue'
//import Parent from './components/Parent_to_child/Parent.vue' //parent to child
//import ReUse from'./components/ReUseComponent/ReUse.vue'
//import HtmlBinding from './components/HtmlBinding.vue'
//import CssBinding from './components/CssBinding.vue'
//import Props from './components/Props/Props.vue'
//import Child from './components/child_to_parent/Child.vue' //child to parent
//import RefUsage from './components/Ref_usage.vue'
//import SimpleForm from './components/Forms/SimpleForm.vue'
//import Modifers from './components/Modifers.vue'
//import NonProps from './components/Non_Props/NonProps.vue'
//import ComputedProperty from './components/ComputedProperty.vue'
//import Watchers from './components/Watchers.vue'
//import Slots from './components/Slots/Slots.vue'
//import MultiSlots from './components/Slots/MultipleSlots.vue'
// import DynamicComponent from './components/DynamicComponent/DinamicComponent.vue'
// import TeleportComponent from './components/Teleport/TeleportComponent.vue';
//import bCandC from './components/LifeCycleMethods/beforCreate_and_Created.vue'
//import bMandM from'./components/LifeCycleMethods/beforeMount_and_Mounted.vue'
//import bUandU from './components/LifeCycleMethods/beforeUpdate_and_Update.vue'
//import bUnM_and_UnM from'./components/LifeCycleMethods/beforeUnMount_and_Unmounted.vue'
import ApiTesting from './components/API/API_Testing.vue'
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
        // Parent,
        //ReUse,
        //HtmlBinding,
        // CssBinding,
        //  Props,
        // Child,
        // RefUsage,
        //SimpleForm,
        //Modifers,
        //NonProps,
        // ComputedProperty,
        // Watchers,
        // Slots,
        // MultiSlots,
        // DynamicComponent,
        // TeleportComponent,
      //  bCandC,
       //bMandM,
        //bUandU,
        //bUnM_and_UnM,
        ApiTesting,
    }
}
</script>

<style>
.container {
    display: flex;
    /* Example: Limit maximum width of container */
    width: 100%;
    padding: 0;
    /* Example: Add padding around container */
}

body {
    margin: 0;
    /* Remove default margin */
    font-family: Arial, sans-serif;
    /* Example: Set default font-family */
    /* background: url('./assets/back.jpg') center center/cover no-repeat; /* Background image */
}
</style>
