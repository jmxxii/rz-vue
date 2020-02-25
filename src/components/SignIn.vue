<template>
    <div class="main-login-container">
        <div class="login-container">
            <h1>Sign In</h1>
            <form>
                <input type="text" v-model="username" placeholder="username" >
                <input type="password" v-model="password" placeholder="password" >
                <v-button name="Go" color="" :onClick="submit" />
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
    name: "SignIn",
    components: {
        "v-button": Button
    },
    methods: {
        submit: async function(e) {
            e.preventDefault();
            
            try {
                const jwtToken = await ApiCalls.callToApi("POST", Api.URL_login, {username: this.username, password: this.password}, "");
                
                if (!jwtToken.xjt) {
                    alert("Authentication failed");
                } else {
                    sessionStorage.setItem('xlgn', true);
                    sessionStorage.setItem('xjt', jwtToken.xjt);
                    this.$emit("refreshUser", "");
                    this.$router.push({ path: "/" });
                }

            } catch(err) {
                alert(err);
            }     
        }
    },
    data: function() {
        return {
            user: "",
            username: "",
            password: ""
        }
    },
    mounted() {
        let isLoggedIn = Auth.checkIfLoggedIn();
        if (isLoggedIn) {
            this.$router.push({path: "/"});
        }
    }
}
</script>

<style>
    .main-login-container {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .main-login-container h1 {
        padding: 25px;
    }
    .login-container {
        width: 300px;
        height: 300px;
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