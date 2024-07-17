<template>
<div class="home">
    <!--<nav>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
     </nav>-->
    <h1>Name : {{ getName() }}</h1>
    <h1>Email : {{ email }}</h1>
    <h1>Mobile : {{ mobile=984543 }}</h1>
    <h3>All Data:{{ getData() }}</h3>
    <h3>Featch Email:{{ getData().Email }}</h3>

</div>
</template>

  
<script>
export default {
    name: 'HomePage',
    data() {
        return {
            email: "Gowda@test.com",
            mobile: '',
           /* getName: function () {
                return "Gowda";
            }*/

        }

    },
    methods:{
      getName(){
        return "Gowda"
      }, 
      getData(){
        return{
          Name:"Ravish Gowda",
          Email:this.email
        }
      }
    }
}
</script>

 
<style scoped>
/*.home {
   background: transparent;

    text-align: center;
   /* border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  Example: Shadow effect 
  }
  nav ul{
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  nav ul li{

    padding: 20px 10px; 
    margin-left: 120px;
    display: inline-block; 
    color: #333; 
    align-items:center;
  }*/
h1 {
    color: rebeccapurple;
    font-size: 20px;
}
</style>
