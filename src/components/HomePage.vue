<template>
    <HeaderPage />
    <h1> Hello {{name}}, welcome to Home page</h1>
    <center>
        <table border="1" cellspacing="0" cellpadding="5">
            <tr>
                <th>Name</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Action</th>
            </tr>
            <tbody v-if="show">
                <tr v-for="rest in restaurants" :key="rest.id">
                    <td>{{rest.name}}</td>
                    <td>{{rest.contact}}</td>
                    <td>{{rest.address}}</td>
                    <td>
                        <router-link :to="'/update-restaurant/'+rest.id">Edit</router-link>
                        &nbsp;
                        <button v-on:click="deleteRestaurant(rest.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
            <tbody v-if="!show">
                <tr>
                    <td colspan="4"><center>No, Result Found</center></td>
                </tr>
            </tbody>
        </table>
    </center>
</template>

<script>
    import axios from 'axios';
    import HeaderPage from './HeaderPage.vue';

    export default {
        name: 'HomePage',
        data() {
            return{
                name: '',
                show: false,
                restaurants: []
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

            let result = await axios.get("http://localhost:3000/restaurants");
            if(result.data.length > 0){
                this.restaurants = result.data;
                this.show = true;
            }
        },
        methods: {
            async deleteRestaurant(id){
                console.log('delete');
                let result = await axios.delete("http://localhost:3000/restaurants/"+id);
                if(result.status == '200'){
                    this.$router.push({name:'HomePage'});
                }
            }
        }
    }
</script>