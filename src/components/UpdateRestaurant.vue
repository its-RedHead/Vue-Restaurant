<template>
    <HeaderPage />
    <h1>Hello {{name}}, Welcome to Update Restaurant Page</h1>
    <div class="updateRestaurant">
        <input type="text" v-model="restaurant.name" placeholder="Enter name" />
        <input type="text" v-model="restaurant.contact" placeholder="Enter contact number" />
        <input type="text" v-model="restaurant.address" placeholder="Enter address" />
        <button v-on:click="updateRestaurant">Update Restaurant</button>
    </div>
</template>

<script>
    import axios from 'axios';
    import HeaderPage from './HeaderPage.vue';

    export default {
        name: 'UpdateRestaurant',
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
        async mounted() {
            let user = localStorage.getItem('user-info');
            if(!user){
                this.$router.push({name: 'SignUp'});
            }else{
                this.name = JSON.parse(user)[0].name;
            }

            let result = await axios.get("http://localhost:3000/restaurants/"+this.$route.params.id);
            if(result.status == '200'){
                this.restaurant = result.data;
            }
        },
        methods: {
            async updateRestaurant(){
                let result = await axios.put("http://localhost:3000/restaurants/"+this.$route.params.id, {
                                name: this.restaurant.name,
                                contact: this.restaurant.contact,
                                address: this.restaurant.address
                            });
                if(result.status == '200'){
                    this.$router.push({name: 'HomePage'});
                }
            }
        }
    }
</script>