<template >
<div class="container">
    <div class="login">
    <h1>SimpleForm</h1><br><br>
   <ul>
    <li v-for="item in error" v-bind:key="item">{{item }} not valid!</li>
   </ul>
       <form action="" >
        <label >Email : </label>
        <input type="text" placeholder="Enter your mail" v-model="form.email" required/>
        <br><br>
        <label >Password : </label>
        <input type="password" placeholder="Enter your password" v-model="form.password" required/>
        <br> <br>
        <label >Country</label>
        <select v-model="form.country">
            <option >India</option>
            <option >USA</option>
            <option >England</option>
            <option >Sri Lanka</option>
        </select>
        <br><br>
       <div class="tech">
        <label  >Technology</label><br><br>
        <label for="react">React.js</label>
        <input type="checkbox" name="" id="react" value="react" v-model="form.technology" >
        <label for="vue">VUE.js</label>
        <input type="checkbox" name="" id="vue" value="vue" v-model="form.technology">
        <label for="node">Node.js</label>
        <input type="checkbox" name="" id="node" value="node" v-model="form.technology">
       </div>
       <div>
        <label for="male">Male</label>
        <input type="radio" name="gender" id="male" value="male" v-model="form.gender">
        <label for="female">Female</label>
        <input type="radio" name="gender" id="female" value="female" v-model="form.gender">
       </div>
        <button type="button" @click="login">Login</button>
       </form>
       
  </div>
</div>
        
   
   
</template>
<script>
export default {
    name:'SimpleForm',
    data()
    {
        return{
            form:{
                email:'',
                password:'',
                country:'',
                technology:[],
                gender:'',
            },
            error:[],
        }
    },
    methods:{
        login(){
            this.error=[];
            for(const item in this.form)
        {
            if(this.form[item]==="" || this.form[item].length===0)
        {
            this.error.push(item)
        }
        }
        if(this.error.length==0)
        {
            alert("Data Submited")
        }
            console.warn(this.form,this.error)
            //console.warn()
           
        }
    }
}
</script>
<style scoped>
.container{
    background-color: blanchedalmond;
}
  .login{
    border: 1px solid rgb(239, 147, 147);
    width: 400px;
    height: 100%;
    background: rgb(199, 244, 101);
    color: white;
    border-radius: 20px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.75);
    background-size: cover;
    overflow: hidden;
    display: flex;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 50px;
    flex-direction: column;
    
}
form{
   
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    height: 100%;
    backdrop-filter: brigthness(40%);
    flex-direction: column;
    display: flex;
    gap: 15px;
}

h1{
    font-weight: normal;
    font-size: 24px;
    text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
    margin-bottom: 30px;
  text-align: center;
}
h5{
    color: #222;
    text-align: center;
}

label{
    color: rgba(255,255,255,0.8);
    text-transform: uppercase;
    font-size: 10px;
    letter-spacing: 2px;
    padding-left: 10px;
}
input {
    background:rgba(255,255,255,0.3) ;
    height: 30px;
    line-height: 40px;
    border-radius: 20px;
    padding: 0px 20px;
    border: none;
    margin-bottom: 20px;
    color: white;

}
.tech{
    background:rgba(255,255,255,0.3) ;
   
    border-radius: 20px;
    border: none;
    
    color: white;

}
button{
    background: rgb(45, 126, 231);
    height: 40px;
    line-height: 40px;
    border-radius: 40px;
    border: none;
    margin: 10px 0px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    color: white;
    font-size: 12px;
    text-transform: uppercase;
}
select{
    background:rgba(255,255,255,0.3) ;
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
    padding: 0px 20px;
    border: none;
    margin-bottom: 20px;
    color: rgb(20, 19, 19);

}
</style>