<template>
    <div class="main-login-container">
        <div class="login-container">
            <h1>Sign Up</h1>
            <form>
                <input type="text" v-model="first_name" placeholder="first name" >
                <input type="text" v-model="last_name" placeholder="last name" >
                <input type="text" v-model="username" placeholder="username" >
                <input type="text" v-model="email_id" placeholder="email" >
                <input type="password" v-model="password" placeholder="password" >
                <input type="password" v-model="confirm_password" placeholder="confirm password" >
                <v-button name="Confirm" color="" :onClick="submit" />
            </form>
        </div>
        </div>
</template>


<script>
import Button from './UIComponents/Button';
import Auth from '../commonMethods/auth';
import ApiCalls from '../commonMethods/apiResponse';
const Api = require('../apiCalls/api').Api;

export default {
    name: "SignUp",
    components: {
        "v-button": Button
    },
    data() {
        return {
            first_name: "",
            last_name: "",
            email_id: "",
            username: "",
            password: "",
            confirm_password: "",
        }
    },
    methods: {
        submit: async function (e){
            e.preventDefault();
            
            let signupData = {
                first_name: this.first_name, 
                last_name: this.last_name, 
                email_id: this.email_id, 
                username: this.username, 
                password: this.password
                };

            if (!this.first_name) return alert("Please add your first name.");
            if (!this.last_name) return alert("Please add your last name.");
            if (!this.email_id) return alert("Please add your email.");
            if (!this.username) return alert("Please add your username.");
            if (!this.password) return alert("Please add your password.");
            if (!this.confirm_password) return alert("Please confirm your password.");
            if (this.confirm_password !== this.password) return alert("Passwords do not match");

            try {
                const result = await ApiCalls.callToApi("POST", Api.URL_signup, signupData, "");
                
                if (result._id) {
                    alert("Sign up successful!")
                    this.$router.push({ path: "/signin" });
                }
                
            } catch(err) {
                alert(err);
            }
        }
    },
    created() {
        const isLoggedIn = Auth.checkIfLoggedIn();
        if (isLoggedIn) this.$router.push({ path: "/" });
    },
}
</script>

<style>
    .login-container {
        width: 300px;
        height: 450px;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, .3);
        margin: 25px;
        padding: 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .login-container input {
        width: 200px;
        height: 30px;
        border-radius: 5px;
        border: 1px solid #efefef;
        margin: 5px;
        padding: 5px;
        outline: none;
        font-size: 14px;
    }

    .login-container form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

</style>