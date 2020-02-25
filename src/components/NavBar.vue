<template>
    <div class="nav-container">
        <img 
            src="https://media.glassdoor.com/sqll/1864184/razz-interactive-squarelogo-1516590341529.png"  
            alt="logo"
            class="image"
            @click="goHome"
        />

        <div class="user-logged-contain" v-if="user">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRq3gK2kpKsUiI3lL-U7uPUl_ET7zfXpPtSE9SghDF0_w4C2_9o"
                alt="user-img"
                class="user-img"
             />
            <p>{{user.toUpperCase()}}</p>
        </div>

        <div v-if="!user" class="btn-container">
            <button class="btn" @click="goToLogin">Login</button>
            <button class="btn" @click="goToSignUp">SignUp</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    props: ["user"],
    methods: {
        goHome: function() {
            this.$router.push({ path: "/"})
        },
        goToLogin: function() {
            this.$router.push({path: '/signin'})
        },
        goToSignUp: function() {
            this.$router.push({path: '/signup'})
        }
    },
    data() {
        return {
            currentUser: ""
        }
    },
    mounted() {
        if (sessionStorage.getItem("user") != null) {
            this.currentUser = sessionStorage.getItem("user");
        }   
    },
}
</script>

<style scoped>
    .nav-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        width: 100%
    }
    .image {
        width: 80px;
        margin: 0px 10px;
        cursor: pointer;
    }
    .btn {
        border: 1px solid #444;
        border-radius: 15px;
        color: #333;
        width: 70px;
        cursor: pointer;
        padding: 5px 15px;
        margin: 5px
    }
    .btn-container {
        padding: 10px;
    }
    .user-img {
        width: 50px;
        height: 50px
    }
    .user-logged-contain {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-right:25px;
    }
</style>