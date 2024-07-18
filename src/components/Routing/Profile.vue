<template>
<div>
    
    
</div>
<h1>{{ profile }}'s Profile</h1>
</template>

<script>
import {
    useRoute
} from 'vue-router';

export default {
    name: 'ProfilePage',
  data() {
    return {
      profile: ''
    }
  },
  watch: {
    '$route'(to) {
      this.profile = to.params.name;
    }
  },
  mounted() {
    const route = useRoute();
    this.profile = route.params.name;
  //  this.fetchProfile();
  },/*
  methods: {
    fetchProfile() {
      
    }
  }*/
}
</script>

<style scoped>

</style>
