<template>
    <HeaderPage />
    <h1>Hello {{name}}, Welcome to Add Restaurant Page</h1>
    <div class="addrestaurant">
        <input type="text" v-model="restaurant.name" placeholder="Enter name" />
        <input type="text" v-model="restaurant.contact" placeholder="Enter contact number" />
        <input type="text" v-model="restaurant.address" placeholder="Enter address" />
        <button v-on:click="addRestaurant">Add Restaurant</button>
    </div>
</template>

<script>
    import axios from 'axios';
    import HeaderPage from './HeaderPage.vue';

    export default {
        name: 'AddRestaurant',
        data() {
            return{
                name: '',
                restaurant: {
                    name: '',
                    contact: '',
                    address: ''
                }
            }
        },
        components: {
            HeaderPage
        },
        mounted() {
            let user = localStorage.getItem('user-info');
            if(!user){
                this.$router.push({name: 'SignUp'});
            }else{
                this.name = JSON.parse(user)[0].name;
            }
        },
        methods: {
            async addRestaurant(){
                let result = await axios.post("http://localhost:3000/restaurants",{ 
                    name: this.restaurant.name,
                    contact: this.restaurant.contact,
                    address: this.restaurant.address,
                });
                if(result.status == '201'){
                    this.$router.push({name: 'HomePage'});
                }
            }
        }
    }
</script>