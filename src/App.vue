<template>
  <div id="app">
    <PopUp 
      v-if="showPopUp" 
      :prizeName="currentPrize.name" 
      :prizeImg="currentPrize.image_url" 
      :onClickYes="yesConfirmed"
      :onClickCancel="closePopUp"
      :isRedeemed="isPrizeRedeemed" 
      :redirect="redirectToPrizes" />
    <NavBar :user="user" />
    <router-view @togglePopUp="togglePopUp" @refreshUser="getUser" ></router-view>
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PopUp from './components/PopUp';
import ApiCalls from './commonMethods/apiResponse';
import Auth from './commonMethods/auth';
const Api = require('./apiCalls/api').Api;
const jwt = require('jsonwebtoken');

export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
    PopUp
  },
  methods: {
    togglePopUp: function(prize) { 
      this.currentPrize = prize;
      this.showPopUp = true;
    },
    closePopUp: function() {
      this.showPopUp = false;
      this.isPrizeRedeemed = false;
      this.prizeConfirmed = {};
    },
    yesConfirmed: async function() {
      
      // Would store JWT in cookie
      let token = Auth.checkForToken();
      if (!token) return alert("Please login to redeem prize.")
      
      
      try {
        if (this.currentPrize.quantity > 0) {
          console.log("Current Prize: ", this.currentPrize)
          this.prizeConfirmed = await ApiCalls.callToApi("POST", Api.URL_redeem_prize, { _id: this.currentPrize._id }, token); 
          this.isPrizeRedeemed = true;
        } else {
          alert("Prize quantity is zero. Please select another prize");
          this.showPopUp = false;
        }
      } catch(err) {
        alert(err);
      }
    },
    redirectToPrizes() {
      this.isPrizeRedeemed = false;
      this.showPopUp = false;
      this.$router.push({ path: "/"});
    },
    getUser() {
      let token = sessionStorage.getItem('xjt');
      let decoded = jwt.verify(token, 'JWT_SECRET');
      sessionStorage.setItem("user", decoded.username);
      this.user = decoded.username;
    }
  },
  data() {
    return {
      showPopUp: false,
      currentPrize: {},
      isPrizeRedeemed: false,
      user: ""
    }
  },
  mounted() {
    if (sessionStorage.getItem("user") != null) {
      this.user = sessionStorage.getItem("user");
    }  
  },
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
</style>

