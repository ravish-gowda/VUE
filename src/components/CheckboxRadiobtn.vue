<template >
    <div>
       <h1>Check-box and Radio-button</h1>
       <h3>Technology</h3>
       <label for="java"> Java</label>
       <input type="checkbox" value="Java" v-model="technology" id="java"  /> 
       <label for="javascript"> javascript</label>
       <input type="checkbox" value="Javascript" v-model="technology"  id="javascript"  />
       <label for="node"> Node</label>
       <input type="checkbox" value="node" v-model="technology"  id="node"  />
       
       <br><br>
       <h3>Profession:</h3>
       <label for="student">Student</label>
       <input type="radio" value="student" id="student" v-model="who" name="who">
       <label for="developer">Developer</label>
       <input type="radio" value="developer" id="developer" v-model="who" name="who">
       <h4>Selected Technology : {{ technology }}</h4>
       <h3> I am a {{ who }}</h3>
       
    </div>
</template>
<script>
export default {
    name:"CheckboxRadiobtn",
    data(){
        return{
            technology:[],
            who:null
        }
    },
}
</script>
<style scoped>
    h1{
        font-size: 30px;
        font-family: 'Times New Roman', Times, serif;
        font-weight: 200;
    }
</style>