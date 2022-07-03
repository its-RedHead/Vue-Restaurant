<template>
    <img class="logo" alt="restaurant logo" src="../assets/logo.png" />
    <h1>Log In</h1>
    <div class="login">
        <input type="email" v-model="email" placeholder="Enter Email" />
        <input type="password" v-model="password" placeholder="Enter Password" />
        <button v-on:click="Login">Login</button>
        <p>
            <router-link to="/sign-up">Go To SignUp</router-link>
        </p>
    </div>
</template>

<script>
    import axios from 'axios';

    export default{
        name: 'LogIn',
        methods:{
            async Login(){
                let result = await axios.get('http://localhost:3000/users/?email='+this.email+'&password='+this.password);
                if(result.status==200 && result.data.length > 0){
                    localStorage.setItem('user-info',JSON.stringify(result.data))
                    this.$router.push({name:'HomePage'});
                }
            }
        },
        mounted() {
            let user = localStorage.getItem('user-info');
            if(user){
                this.$router.push({name:'HomePage'});
            }
        }
    }
</script>

<style>

</style>