<template>
    <img class="logo" alt="restaurant logo" src="../assets/logo.png" />
    <h1>Sign up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name" />
        <input type="email" v-model="email" placeholder="Enter Email" />
        <input type="password" v-model="password" placeholder="Enter Password" />
        <button v-on:click="SignUp">Sign Up</button>
        <p>
            <router-link to="/login">Go To Login</router-link>
        </p>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'SignUp',
        data(){
            return {
                name: '',
                email: '',
                password: ''
            }
        },
        methods: {
            async SignUp() {
                let result = await axios.post('http://localhost:3000/users', {
                    email: this.email,
                    password: this.password,
                    name: this.name
                });
                if(result.status == 201){
                    localStorage.setItem('user-info',JSON.stringify(result.data));
                    this.$router.push({name:'HomePage'});
                }
            }
        },
        mounted(){
            let user= localStorage.getItem('user-info');
            if(user){
                this.$router.push({name:'HomePage'});
            }
        }
    }
</script>

<style>
    
</style>